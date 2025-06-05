const Team=()=>{
      const teamMembers = [
        { name: 'Dr. Robert Chen', role: 'Founder & CEO', image: 'https://images.unsplash.com/photo-1559839734-2b71ea197ec2?w=400&auto=format&fit=crop', bio: 'Leading with 20+ years of experience in medical supply chain management.' },
        { name: 'Sarah Johnson', role: 'Head of Operations', image: 'https://images.unsplash.com/photo-1573496359142-b8d87734a5a2?w=400&auto=format&fit=crop', bio: 'Ensuring seamless logistics and distribution nationwide.' },
        { name: 'Michael Patel', role: 'Sales Director',     image: 'https://images.unsplash.com/photo-1560250097-0b93528c311a?w=400&auto=format&fit=crop', 
 bio: 'Building strong relationships with healthcare providers.' },
      ];
    return(
<div className="container mx-auto px-4 sm:px-6 md:px-12 lg:px-20 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-text text-center mb-12">Leadership Team</h2>
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {teamMembers.map((member, index) => (
            <div key={index} className="group bg-sterile p-6 rounded-xl shadow-lg hover:shadow-xl transition-all transform hover:-translate-y-1 text-center">
              <div className="relative overflow-hidden rounded-full w-40 h-40 mx-auto mb-4">
                <img
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-105"
                  src={member.image}
                  alt={member.name}
                  loading="lazy"
                />
                <div className="absolute inset-0  opacity-0 group-hover:opacity-100 transition-opacity duration-300 rounded-full"></div>
              </div>
              <h3 className="text-lg md:text-xl font-semibold text-text">{member.name}</h3>
              <p className="text-secondary font-medium mb-2 text-sm md:text-base">{member.role}</p>
              <p className="text-textSecondary text-sm md:text-base">{member.bio}</p>
            </div>
          ))}
        </div>
      </div>
    )
}
export default Team
      