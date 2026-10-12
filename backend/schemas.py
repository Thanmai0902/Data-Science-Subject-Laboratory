from pydantic import BaseModel
from typing import Optional

class ExperimentBase(BaseModel):
    experiment_number: str
    title: str
    short_description: str
    aim: str
    objective: str
    theory: str
    requirements: str
    procedure: str
    python_code: str
    output_image: Optional[str] = None
    result: str
    youtube_link: Optional[str] = None
    github_link: Optional[str] = None

class ExperimentCreate(ExperimentBase):
    pass

class Experiment(ExperimentBase):
    id: int

    class Config:
        orm_mode = True
