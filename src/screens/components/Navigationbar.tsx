const Navigationbar = () => {
    return (
      <>
        <div className="h-14 ml-8 mr-8 pl-1 pr-1 content-center grid grid-cols-3 gap-4">
          <div className="flex flex-row gap-1 items-center">
              <span className="font-extralight font-mono text-xl text-uismoke">BAYU</span>
              <span className="font-semibold font-mono text-xl text-uismoke">YUHARTONO</span>
          </div>
          <div className="flex flex-row gap-12 justify-center items-center text-uismoke">
              <span className="font-light font-mono text-sm">About Me</span>
              <span className="font-light font-mono text-sm">/</span>
              <span className="font-light font-mono text-sm">Projects</span>
              <span className="font-light font-mono text-sm">/</span>
              <span className="font-light font-mono text-sm">Contact</span>
          </div>
          <div className="flex flex-row self-end justify-end">
              <div className="border-2 border-uismoke rounded-lg pl-6 pr-6 pb-1 pt-1">
              <span className="font-light font-mono text-uismoke text-sm">Hire Me</span>
              </div>
          </div>
        </div>
      </>
    )
  }
  
  export default Navigationbar
  