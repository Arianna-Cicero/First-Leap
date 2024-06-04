import React from 'react'; 
import ShareIcon from '../assets/Share-Icon.svg'; 

const SharingIcon = () => {

  const handleShare = async () => {

    const shareData = {
      title: 'Check out this awesome job!', 
      text: 'Take a look at this cool job I found!',
      url: window.location.href
    };

    if (navigator.share) {
      try {
        await navigator.share(shareData);
        console.log('Content shared successfully!'); 
      } catch (err) {
        console.error('Error sharing content:', err); 
      }
    } else {
      const fallbackUrl = `https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(window.location.href)}`;
      window.open(fallbackUrl, '_blank');
    }
  };

  return (
    <div>
      <img
        src={ShareIcon}
        alt="Share Icon"
        className="share-icon"
        onClick={handleShare}
        style={{ cursor: 'pointer' }}
      />
    </div>
  );
};

export default SharingIcon;
