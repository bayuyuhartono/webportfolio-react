const Home = () => {
  return (
    <>
      <div className="w-screen h-screen bg-uismoke pt-8">
        <div className="h-16 bg-white ml-8 mr-8 pl-8 pr-8 rounded-lg content-center grid grid-cols-3 gap-4">
          <div className="flex flex-row gap-1 items-center">
            <span className="font-extralight font-mono text-xl text-uiblack">BAYU</span>
            <span className="font-semibold font-mono text-xl text-uiblack">YUHARTONO</span>
          </div>
          <div className="flex flex-row gap-12 justify-center items-center">
            <span className="font-light font-mono text-uiblack text-sm">Projects</span>
            <span className="font-light font-mono text-uiblack text-sm">/</span>
            <span className="font-light font-mono text-uiblack text-sm">About</span>
            <span className="font-light font-mono text-uiblack text-sm">/</span>
            <span className="font-light font-mono text-uiblack text-sm">Contact</span>
          </div>
          <div className="flex flex-row self-end justify-end">
            <div className="border-2 border-uiblack rounded-lg pl-7 pr-7 pb-2 pt-2">
              <span className="font-light font-mono text-uiblack text-sm">Hire Me</span>
            </div>
          </div>
        </div>
        <div className="z-0">
          <div className="w-full flex justify-center">
            <h1 className="text-[8.6rem] font-mono font-extrabold text-uiblack tracking-wide">
              MOBILE DEVELOPER
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 pl-8 pr-8 h-96 z-20">
            <div className="w-96 pt-16">
              <p className="text-l text-uiblack">
                Originating from Jakarta, I'm a Mobile Developer who has experience in developing Mobile Applications using Swift for IOS and React Native for Hybrid
              </p>
            </div>
            <div className="w-full flex justify-end">
              <div className="w-96 content-end">
                <p className="text-l text-uiblack text-right">
                  Originating from Jakarta, I'm a Mobile Developer who has experience in developing Mobile Applications using Swift for IOS and React Native for Hybrid
                </p>
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

export default Home
