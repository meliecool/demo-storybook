import './avatar.css';

interface AvatarProps {
  size?: 'small' | 'medium' | 'large';
  image?: string,
}

export const Avatar = (props: AvatarProps) => {
  return (
    <div className={`size-${props.size ?? 'medium'} container`}>
      <img src={props.image ? props.image : 'https://i.pinimg.com/736x/ba/92/7f/ba927ff34cd961ce2c184d47e8ead9f6.jpg'} />
    </div>
  );
};
