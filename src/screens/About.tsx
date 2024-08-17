import BadgeCard from "./components/BadgeCard"
import Navigationbar from "./components/Navigationbar"

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
          <div className="grid grid-cols-3 gap-4 bg- pl-8 pr-8 h-96 z-20">
            <div className="col-span-2">
              <p className="text-l text-uismoke max-w-96">
                Originating from Jakarta, I'm a Mobile Developer who has experience in developing Mobile Applications using Swift for IOS and React Native for Hybrid
              </p>
            </div>
            <div className="w-full content-end">
              <div className="h-14 text-end">
                <BadgeCard text="Swift"/>
                <BadgeCard text="React Native"/>
                <BadgeCard text="Flutter"/>
              </div>
              <div className="h-14 text-end">
                <BadgeCard text="Javascript"/>
                <BadgeCard text="Node JS"/>
                <BadgeCard text="Laravel"/>
              </div>
              <div className="h-14 text-end">
                <BadgeCard text="Express JS"/>
                <BadgeCard text="PHP"/>
                <BadgeCard text="Codeigniter"/>
              </div>
            </div>
          </div>
        </div>
        <div className="z-10 bottom-0 absolute w-full flex justify-center">
          <img 
            src="https://png.pngtree.com/png-vector/20230918/ourmid/pngtree-man-in-shirt-smiles-and-gives-thumbs-up-to-show-approval-png-image_10094392.png" 
            className="h-[630px]" 
          />
        </div>
      </div>
    </>
  )
}

export default About
