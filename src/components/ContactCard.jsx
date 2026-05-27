import PropTypes from 'prop-types';

const ContactCard = ({ icon, title, children }) => {
  return (
    <div className="bg-white/10 backdrop-blur-sm rounded-xl p-6 transition-all duration-300 hover:bg-white/20 hover:-translate-y-1">
      <div className="bg-[var(--color-accent)] w-14 h-14 rounded-full flex items-center justify-center mx-auto mb-4">
        {icon}
      </div>
      <h3 className="text-xl font-bold text-center text-[var(--color-accent)] mb-3">{title}</h3>
      <div className="text-center text-white/90">
        {children}
      </div>
    </div>
  );
};

ContactCard.propTypes = {
  icon: PropTypes.node.isRequired,
  title: PropTypes.string.isRequired,
  children: PropTypes.node.isRequired,
};

export default ContactCard;