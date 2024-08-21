import LDCBanner from '/public/Banner.png';

const Hero = () => {

    return (
        <div className="h-screen justify-center items-center pb-80 flex">
            <div className='flex max-h-60'>
                <img src={LDCBanner} alt="LDC Banner" className="" />
            </div>
        </div>
    )

}

export default Hero;