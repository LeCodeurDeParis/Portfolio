interface LightProps {
    size: number;
    top: number;
    left: number;
    color: string;
}

export default function Light({size, top, left, color }: LightProps) {
    return (
      <div
        className={`absolute rounded-full blur-[80px] -z-10`}
        style={{
          top: `${top}%`,
          left: `${left}%`,
          width: `${size}rem`,
          height: `${size}rem`,
          backgroundColor: `#${color}`
        }}
      ></div>
    );
  }