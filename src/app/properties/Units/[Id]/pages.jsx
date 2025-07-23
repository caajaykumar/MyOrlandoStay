import Image from 'next/image';
import properties from '../../propartiesdata'
import Link from 'next/link';
import Breadcrumb from "../components/Breadcrumb/Breadcrumb";


export default function UnitDetails({ params }) {
  const { unitId } = params;

 
  const property = properties.find(
    (p) => p.unitLink.toLowerCase() === `/Units/${unitId}`.toLowerCase()
  );

  console.log(` print the console  ${unitId}`)

  if (!property) {
    return <div style={{ padding: '2rem' }}><h2>404 - Unit Not Found</h2></div>;
  }

  return (

<>

<Breadcrumb
       // title={`Unit ${unitId}`}
        breadcrumbs={[
          { name: 'Home', link: '/', active: false },
          { name: 'Units', link: '/Units', active: false },
          { name: `Unit ${unitId}`, link: `/Units/${unitId}`, active: true },
        ]}
      />
    


    {/* <section style={{ padding: '2rem' }}>
      <h1>{property.title}</h1>
      <Image
        src={property.imageUrl}
        alt={property.alt}
        width={900}
        height={500}
        style={{ borderRadius: '10px', marginBottom: '20px' }}
      />
      <p>{property.alt}</p>
      <Link
        href={property.bookLink}
        target="_blank"
        rel="noopener noreferrer"
        style={{
          display: 'inline-block',
          marginTop: '1rem',
          padding: '10px 20px',
          backgroundColor: '#007bff',
          color: '#fff',
          borderRadius: '6px',
          textDecoration: 'none',
        }}
      >
        Book Now
      </Link>
    </section> */}

    </>
  );
}
