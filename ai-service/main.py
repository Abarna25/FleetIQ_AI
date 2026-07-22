from fastapi import FastAPI
from pydantic import BaseModel
import random

app = FastAPI(title="FleetIQ AI Service", version="1.0.0")

class MaintenanceRequest(BaseModel):
    vehicle_id: str
    current_mileage: int
    engine_hours: int

class MaintenanceResponse(BaseModel):
    vehicle_id: str
    health_score: int
    failure_probability: float
    next_service_prediction_days: int

@app.get("/")
def read_root():
    return {"status": "ok", "service": "FleetIQ AI"}

@app.post("/predict-maintenance", response_model=MaintenanceResponse)
def predict_maintenance(req: MaintenanceRequest):
    # Mock AI response logic
    health_score = max(0, 100 - (req.current_mileage // 10000))
    failure_probability = round(random.uniform(0.01, 0.5), 2)
    next_service = random.randint(10, 90)
    
    return {
        "vehicle_id": req.vehicle_id,
        "health_score": health_score,
        "failure_probability": failure_probability,
        "next_service_prediction_days": next_service
    }
