// Character.js

var SteeringBehaviors = {
    m_pVehicle:null,
    seek:function(targetPos){
        var DesiredVelocity=cc.pMultIn(cc.pSubIn(targetPos-m_pVehicle.getPos()),m_pVehicle.getMaxSpeed());
        return         cc.pSubIn(DesiredVelocity-m_pVehicle.velocity());
    },
    ctor:function(vechicle){
        this.m_pVehicle=vechicle;
    }
};



