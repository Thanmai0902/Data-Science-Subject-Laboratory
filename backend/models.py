from sqlalchemy import Column, Integer, String, Text
from .database import Base

class Experiment(Base):
    __tablename__ = "experiments"

    id = Column(Integer, primary_key=True, index=True)
    experiment_number = Column(String, unique=True, index=True)
    title = Column(String, index=True)
    short_description = Column(Text)
    aim = Column(Text)
    objective = Column(Text)
    theory = Column(Text)
    requirements = Column(Text)
    procedure = Column(Text)
    python_code = Column(Text)
    output_image = Column(String, nullable=True)
    result = Column(Text)
    youtube_link = Column(String, nullable=True)
    github_link = Column(String, nullable=True)
