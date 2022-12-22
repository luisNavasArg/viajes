import hoteles from '../models/hoteles'
import dbConnect from '../config/config'
export default function Hoteles({Hoteles}) {
    console.log(Hoteles);
    return(
        <div>Hoteles</div>
    )
}
export async function getServerSideProps() {
    await dbConnect()
  
    /* find all the data in our database */
    const result = await hoteles.find({})
    const Hoteles = result.map((doc) => {
      const hotel = doc.toObject()
      hotel._id = user._id.toString()
      return hotel
    })
  
    return { props: { Hoteles: Hoteles } }
  }