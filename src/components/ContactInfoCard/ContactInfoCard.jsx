import './ContactInfoCardStyle.css'
const ContactInfoCard = ({ image, label, value }) => {
  return (
    <div className="contact-card">
      <img src={image} alt="" />
      <div className="information">
        <p className="label pb-1 dark:text-white text-gray-600">{label}</p>
        <p className="vs text-blacky dark:text-gray-200 font-semibold">
          {value}
        </p>
      </div>
    </div>
  )
}

export default ContactInfoCard
