const Background = () => {
    return (
        <div className="fixed top-0 left-0 w-full h-screen">
            <video 
                autoPlay 
                loop 
                muted
                className="w-full h-full object-cover"
            >
                <source src="/assets/background.mp4" type="video/mp4" />
                Your browser does not support the video tag.
            </video>
        </div>
    )
  }
  export default Background