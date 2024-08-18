import Accordion from "./components/Accordion"
import BadgeCard from "./components/BadgeCard"
import Navigationbar from "./components/Navigationbar"
import profilePict from "../assets/profilepict.jpg"

const About = () => {
  return (
    <>
      <div className="w-screen h-screen bg-black pt-8">
        <Navigationbar />
        <div className="z-0">
          <div className="w-full flex justify-center">
            <h1 className="text-[8.6rem] font-mono font-extrabold text-uismoke tracking-wide">
              MOBILE DEVELOPER
            </h1>
          </div>
          <div className="grid grid-cols-3 gap-4 pl-8 pr-8 z-20">
            <div className="">
              <div className="h-fit mt-8 mb-8">
                <p className="text-l text-uismoke max-w-96">
                  <p className="text-3xl font-bold">Hello...</p>
                  My name is Bayu, Originating form Indonesia, I'm a Mobile Developer who has experience in developing mobile and website applications, able to work in teams and individually also able to adapt quickly in understanding new things so that they can be relied on in collaboration. Experienced in building the applications with Swift, React Native and React JS
                </p>
              </div>
              <div className="w-full mt-16">
                <div className="h-14 place-content-center">
                  <BadgeCard text="Swift"/>
                  <BadgeCard text="React Native"/>
                  <BadgeCard text="Flutter"/>
                </div>
                <div className="h-14 place-content-center">
                  <BadgeCard text="Javascript"/>
                  <BadgeCard text="Typescript"/>
                  <BadgeCard text="React JS"/>
                </div>
                <div className="h-14 place-content-center">
                  <BadgeCard text="PHP"/>
                  <BadgeCard text="Laravel"/>
                  <BadgeCard text="Codeigniter"/>
                </div>
              </div>
            </div>
            <div className="z-10 flex justify-center">
              <img 
                src={profilePict} 
                className="object-cover h-[450px] w-[450px] rounded-full" 
              />
            </div>
            <div className="">
              <p className="text-xl text-uismoke mb-4">Professional Experience</p>
              <Accordion />
            </div>
          </div>
        </div>
        {/* <div className="z-10 bottom-0 absolute w-full flex justify-center">
          <img 
            src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094392.png" 
            className="h-[630px]" 
          />
        </div> */}
      </div>
    </>
  )
}

export default About
