// Character.js

var MoveEntity = BaseEnity.extend({
    //实体的速度
    m_vVelocity:null,
    //一个标准化向量,指向实体的朝向
    m_vHeading:null,
    //垂直朝向的向量
    m_vSide:null,
    //实体的质量 double
    m_dMall:null,
    //实体的最大速率 double
    m_dMaxSpeed:null,
    //实体产生的提供自己最大的力 double
    m_dMaxForde:null,
    //交通工具的最大速率(弧度每秒) double
    m_dMaxTurnRate:null
});



