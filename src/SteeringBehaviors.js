// Character.js

var SteeringBehaviors = {
    seek:function(targetPos){
        var DesiredVelocity=cc.p(targetPos,m_pVehicle.pos())*-m_pVehicle.maxSpeed();
        return         DesiredVelocity-m_pVehicle.Velocity();
    }

};



