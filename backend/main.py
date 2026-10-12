from fastapi import FastAPI, Depends, HTTPException
from sqlalchemy.orm import Session
from typing import List

from . import models, schemas
from .database import SessionLocal, engine

models.Base.metadata.create_all(bind=engine)

app = FastAPI(title="Data Science Lab API")

# Dependency
def get_db():
    db = SessionLocal()
    try:
        yield db
    finally:
        db.close()

@app.post("/experiments/", response_model=schemas.Experiment)
def create_experiment(experiment: schemas.ExperimentCreate, db: Session = Depends(get_db)):
    db_experiment = models.Experiment(**experiment.dict())
    db.add(db_experiment)
    db.commit()
    db.refresh(db_experiment)
    return db_experiment

@app.get("/experiments/", response_model=List[schemas.Experiment])
def read_experiments(skip: int = 0, limit: int = 100, db: Session = Depends(get_db)):
    experiments = db.query(models.Experiment).offset(skip).limit(limit).all()
    return experiments

@app.get("/experiments/search", response_model=List[schemas.Experiment])
def search_experiments(q: str, db: Session = Depends(get_db)):
    experiments = db.query(models.Experiment).filter(
        models.Experiment.title.contains(q) | 
        models.Experiment.short_description.contains(q) |
        models.Experiment.experiment_number.contains(q)
    ).all()
    return experiments

@app.get("/experiments/{experiment_id}", response_model=schemas.Experiment)
def read_experiment(experiment_id: int, db: Session = Depends(get_db)):
    experiment = db.query(models.Experiment).filter(models.Experiment.id == experiment_id).first()
    if experiment is None:
        raise HTTPException(status_code=404, detail="Experiment not found")
    return experiment

@app.put("/experiments/{experiment_id}", response_model=schemas.Experiment)
def update_experiment(experiment_id: int, experiment: schemas.ExperimentCreate, db: Session = Depends(get_db)):
    db_experiment = db.query(models.Experiment).filter(models.Experiment.id == experiment_id).first()
    if db_experiment is None:
        raise HTTPException(status_code=404, detail="Experiment not found")
    
    for key, value in experiment.dict().items():
        setattr(db_experiment, key, value)
    
    db.commit()
    db.refresh(db_experiment)
    return db_experiment

@app.delete("/experiments/{experiment_id}")
def delete_experiment(experiment_id: int, db: Session = Depends(get_db)):
    db_experiment = db.query(models.Experiment).filter(models.Experiment.id == experiment_id).first()
    if db_experiment is None:
        raise HTTPException(status_code=404, detail="Experiment not found")
    db.delete(db_experiment)
    db.commit()
    return {"message": "Experiment deleted successfully"}
