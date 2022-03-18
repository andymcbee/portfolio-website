import "./PortfolioGridItem.css"
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome"
import { faReact, faNodeJs, faJs, faCss3, faHtml5 } from "@fortawesome/free-brands-svg-icons"
import projectData from "../projectData.json"


//<FontAwesomeIcon icon={ faReact } />

function PortfolioGridItem() {



const projectGridItems = projectData.map(item => {


    //console.log(item.techStack)
    return (
        
        <div className="item-a">
            
            <div><h2>{item.title}</h2></div>
            <div>
                <div>{item.description}</div>
                {item.readMore && <div>Read More &gt;&gt; </div>}
            </div>
            <div>
                <div className="techStackTitle"><h3>Tech Stack</h3></div>
                <div className="techStackFlexContainer">
                    {item.techStack.map((techItem, index) => {
                        

                        console.log(techItem.toLowerCase())

                       let currentItemIcon = function determineIcon() {
                     
                            if (techItem.toLowerCase() === "react")
                            {
                                return (<FontAwesomeIcon icon={ faReact } size="3x" />)
                            }

                            if (techItem.toLowerCase() === "css")
                            {
                                return (<FontAwesomeIcon icon={ faCss3 } size="3x" />)
                            }

                            if (techItem.toLowerCase() === "html")
                            {
                                return (<FontAwesomeIcon icon={ faHtml5 } size="3x" />)
                            }

                            if (techItem.toLowerCase() === "javascript")
                            {
                                return (<FontAwesomeIcon icon={ faJs } size="3x" />)
                            }

                            if (techItem.toLowerCase() === "nodejs")
                            {
                                return (<FontAwesomeIcon icon={ faNodeJs } size="3x" />)
                            }
                        }

                        return (
                            <div className="techStackItem">{currentItemIcon()}</div>
                        )
                    })}
                </div>
            </div>
            <div className="buttonFlexContainer">
                {item.githubUrl && <button className="portfolioItemButton">View on GitHub</button>}
                {item.liveSiteUrl && <button className="portfolioItemButton">View on GitHub</button>}
            </div>
        
        </div>

        

    )
})




    return (
      <div className="PortfolioGridItem">

        <div className="portfolioGrid">

         {projectGridItems}

        </div>
        

        
      </div>
    );
  }
  
  export default PortfolioGridItem;