import React from "react";
import team1 from "../images/team-1.png";
import team2 from "../images/team-2.png";
import team3 from "../images/team-3.png";

const Team = () => {
   return (
      <div className="team">
         <div className="container text-center">
            <h2 className="header-text">Meet the Team</h2>
            <div className="row">
               <div className="col-md-4">
                  <div className="team-box">
                     <img src={team1} alt="" />
                     <h3 className="name">JACK SPARROW</h3>
                     <h4 className="title">CO-FOUNDER / OPERATIONS</h4>
                     <p>
                        Enterprenuer and a future planner with <br />
                        wide knowledge on blockchain & globe trotter
                     </p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="team-box">
                     <img src={team2} alt="" />
                     <h3 className="name">JAMES BOND</h3>
                     <h4 className="title">CO-FOUNDER / MARKETING</h4>
                     <p>
                        All on the phone, marketing for 10 years great <br />
                        knowledge of digital and traditional marketing
                     </p>
                  </div>
               </div>
               <div className="col-md-4">
                  <div className="team-box">
                     <img src={team3} alt="" />
                     <h3 className="name">Charlie Angel</h3>
                     <h4 className="title">LEAD DEVELOPER</h4>
                     <p>
                        It in the blood, Full stack with a <br />
                        background in AI & Art, Father to a <br /> daughter and
                        full time on my computer
                     </p>
                  </div>
               </div>
            </div>
         </div>
      </div>
   );
};

export default Team;
