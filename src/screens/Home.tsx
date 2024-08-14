const Home = () => {
  return (
    <>
      <div className="w-screen h-screen bg-uiblack pt-8">
        <div className="h-16 bg-uismoke ml-8 mr-8 rounded-lg">

        </div>
        <div className="z-10">
          <div className="w-full flex justify-center">
            <h1 className="text-[8.6rem] font-mono font-extrabold text-uismoke tracking-wide">
              MOBILE DEVELOPER
            </h1>
          </div>
          <div className="grid grid-cols-2 gap-4 pl-8 pr-8 h-96">
            <div className="w-96 pt-16">
              <p className="text-l text-uismoke">
                Originating from Jakarta, I'm a Mobile Developer who has experience in developing Mobile Applications using Swift for IOS and React Native for Hybrid
              </p>
            </div>
            <div className="w-full flex justify-end">
              <div className="w-96 content-end">
                <p className="text-l text-uismoke text-right">
                  Originating from Jakarta, I'm a Mobile Developer who has experience in developing Mobile Applications using Swift for IOS and React Native for Hybrid
                </p>
              </div>
            </div>
          </div>
        </div>
        <div className="z-0 absolute bottom-0 w-full flex justify-center">
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
