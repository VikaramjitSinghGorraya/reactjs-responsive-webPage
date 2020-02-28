import React from 'react'
import FirstImage from '../Images/sitting.png'
import SecondImage from '../Images/fitness.png'
import ThirdImage from '../Images/stretching.png'
import FourthImage from '../Images/lifting.png'
const MiddleSection = () => {
    return (
        <div className="middle-container">
             <div className="middle-div">
                <div className="item1"> 
                    <p>Be part of a community that moves and motivates together. All classes are included in your membership and are the perfect way to stay inspired and challenged, all while having a good time. One of our favorite new classes, this calorie-scorching, strength-building workout of challenging sets focuses on building strong legs and glutes.</p>
                    <p>Be part of a community that moves and motivates together. All classes are included in your membership and are the perfect way to stay inspired and challenged, all while having a good time. One of our favorite new classes, this calorie-scorching, strength-building workout of challenging sets focuses on building strong legs and glutes.</p>
                </div>
                <div>
                    <img src={FirstImage} alt="/sittingImage"/>
                </div>
            </div>
        <div className="middle-div2">
            <div className="item">
            <h1>Fitness Class</h1>
                <img src={SecondImage} alt="/fitnessImage"/>
                <p>Weight training that creates serious results and strong bodies. Barbells help build all major muscle groups in this strength-training class. It's absolute, positive power.</p>
            </div>

            <div className="item">
            <h1>Yoga Class</h1>
                <img src={ThirdImage} alt="/fitnessImage"/>
                <p>Weight training that creates serious results and strong bodies. Barbells help build all major muscle groups in this strength-training class. It's absolute, positive power.</p>
            </div>

            <div className="item">
            <h1>Lifting Class</h1>
                <img src={FourthImage} alt="/fitnessImage"/>
                <p>Weight training that creates serious results and strong bodies. Barbells help build all major muscle groups in this strength-training class. It's absolute, positive power.</p>
            </div>
        </div>
        </div>
       
    )
}
export default MiddleSection;