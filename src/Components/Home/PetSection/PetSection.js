import Image from "next/image";
import Link from "next/link";

const PetSection = async () => {

    // All pets data fetch from database
    const res = await fetch("https://pet-adopter-backend.vercel.app/api/v1/petlistings", {
        cache: "no-store"
    });
    const pets = await res.json();
    const slicedData = pets.slice(0, 4);



    return (
        <div className="mt-10 mb-20  max-w-[1366px]  mx-auto">
            <div className="text-center space-y-3">

                <Image width={200} height={200} className="w-12 rounded-2xl mx-auto" src="https://i.ibb.co/3fdPN5F/pawprint.gif" alt="" />
                <h3 className="text-base font-semibold text-[#F04336]">Meet The Pets</h3>
                <h1 className="text-3xl lg:text-5xl text-center font-bold pb-6">Our Pets Waiting for Adoption</h1>
                <p className="text-base font-medium ">The best overall pet DNA test is Embark Breed & Health Kit (view at Chewy), which <br /> provides you with a breed brwn and information Most pets</p>
            </div>

            {/* Card section */}
            <div className="my-5">

                <div className="grid grid-cols-1 mx-10 xl:grid-cols-4 lg:grid-cols- md:grid-cols-2 gap-4">

                    {
                        slicedData?.map(pet =>
                            <div key={pet._id} className="shadow-xl rounded-lg bg-white">

                                <Image src={pet.petImage} alt="" width={300} height={300} className="rounded-t-lg hover:cursor-pointer hover:scale-105 transform delay-200 duration-700 h-[280px] w-[350px]" />

                                <div className="px-2 py-4">
                                    <h3 className="text-lg font-semibold mb-2">{pet.petName}</h3>

                                    <div>
                                        <p className="text-black font-medium mb-2">Age: {pet.petAge}</p>
                                        <p className="text-black font-medium mb-2">Location: {pet.petLocation}</p>
                                        <div className="flex justify-around mt-4 mb-2">
                                            <Link href={'/pet-listing'}><button className="btn-sm text-white rounded-md bg-[#F04336] hover:bg-black ">Adopt</button></Link>
                                            {/* <button className="btn-sm rounded-md hover:bg-black  bg-pink-700  text-white">Read More</button> */}
                                        </div>
                                    </div>
                                </div>
                            </div>
                        )
                    }
                </div>

            </div>

            {/* See All Pets Button  */}
            <div className="text-center my-5 ">
                <Link href="/pet-listing">
                    <button className=" p-2 rounded-md bg-[#F04336] text-white hover:bg-black font-medium ">See All Pets</button>
                </Link>

            </div>

        </div>
    );
};

export default PetSection;