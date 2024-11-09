import image1 from '../../assets/img/team/team-1.jpg'
import image2 from '../../assets/img/team/team-2.jpg'
import image3 from '../../assets/img/team/team-3.jpg'
import image4 from '../../assets/img/team/team-4.jpg'
import TeamItem from './TeamItem'

const dummy = [{
    key: 1,
    name: 'Dr Adnan Rashid',
    designation: 'Advisor',
    image: image1
    
},{
    key: 2,
    name: 'Mr Majid Maqbool',
    designation: 'Co Advisor',
    image: image3
    
},{
    key: 3,
    name: 'Areej Razzaq',
    designation: 'Developer',
    image: image2
    
},{
    key: 4,
    name: 'Huda Fatima',
    designation: 'Developer',
    image: image4
    
}]

const Team = () => {
    return(
        <>
    <section id="team"  className="team">
      <div  className="container" data-aos="fade-up">

        <div  className="section-header">
          <h2>Our Team</h2>
          <p>Nulla dolorum nulla nesciunt rerum facere sed ut inventore quam porro nihil id ratione ea sunt quis dolorem dolore earum</p>
        </div>

        <div  className="row gy-4">
        {dummy.map(team => <TeamItem name={team.name} key={team.key} designation={team.designation} image = {team.image}  />)}
        </div>

      </div>
    </section>


    
        </>
    )
}

export default Team; 