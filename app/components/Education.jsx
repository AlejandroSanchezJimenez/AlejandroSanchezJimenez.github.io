export default function Education() {
  const education = [
    {
      institution: 'IES Las Fuentezuelas, Jaén, España',
      degree: 'Desarrollo de Aplicaciones Web (FP)',
      period: '2021 - 2024',
    },
  ]

  return (
    <div className='education'>
      {education.map((edu) => (
        <div key={edu.institution} className='education-item'>
          <h3>{edu.institution}</h3>
          <h4>{edu.degree}</h4>
          <h5>{edu.period}</h5>
        </div>
      ))}
    </div>
  )
}
