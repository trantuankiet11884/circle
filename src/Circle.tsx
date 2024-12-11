import React, { CSSProperties, useEffect } from 'react';
import './circle.scss';
import { Grid } from 'antd';
import { Pic } from './assets/svg';

interface MenuOption {
  icon: React.ReactNode;
  name: string;
  link: string;
  style?: CSSProperties;
}

const menuOptions: MenuOption[] = [
  { icon: '', name: '', link: '' },
  { icon: '', name: '', link: '' },
  { icon: '', name: '', link: '' },
  { icon: '', name: '', link: '' },
  { icon: '', name: '', link: '' },
  { icon: '', name: '', link: '' },
  { icon: '', name: '', link: '' },
  { icon: '', name: '', link: '' },
];

const outCircle: MenuOption[] = [
  { icon: '', name: '', link: '' },
  { icon: '', name: '', link: '' },
  { icon: '', name: '', link: '' },
  { icon: '', name: '', link: '' },
  { icon: '', name: '', link: '' },
  { icon: '', name: '', link: '' },
  { icon: '', name: '', link: '' },
];

const { useBreakpoint } = Grid;

const Circle: React.FC = () => {
  const screen = useBreakpoint();

  useEffect(() => {
    const sectors = document.querySelectorAll('.sector');
    const options = document.querySelectorAll('.option');
    const totalSectors = sectors.length;
    const skewVal = 360 / totalSectors - 90;

    let deviation = 0;
    if ((totalSectors / 2) % 2 !== 0) {
      deviation = 360 / totalSectors / 2;
    }

    sectors.forEach((sector, index) => {
      const angle = (360 / totalSectors) * (index + 1) - deviation;
      const optionAngle = angle + Math.abs(skewVal) + (90 - Math.abs(skewVal)) / 2;

      (options[index] as HTMLElement).style.transform =
        `rotateZ(${optionAngle}deg) translateY(-140px) rotate(-${optionAngle}deg)`;
      (sector as HTMLElement).style.transform = `rotate(${angle}deg) skew(${skewVal}deg)`;
    });
  }, []);

  return (
    <div className='min-h-screen relative flex items-center justify-center'>
      {outCircle.map((_, idx) => (
        <span className={`trapezoid${idx + 1} absolute`} key={idx + 1}></span>
      ))}
      <div className=''>
        <Pic
          className={`${
            screen.lg ? 'w-[750px] h-[750px]' : screen?.md ? 'w-[375px] h-[375px]' : 'w-[250px] h-[250px]'
          }`}
        />
      </div>
      <div
        className='absolute'
        style={{
          top: '52.3%',
          left: '50.1%',
          transform: 'translate(-50%, -50%)',
        }}
      >
        <div className='relative menu '>
          {menuOptions.map((option, index) => (
            <a href='' key={index}>
              <div className='sector'></div>
              <div className='option'>
                <span className='material-icons-round' style={option.style}>
                  {option.icon}
                </span>
                <div className='name'>{option.name}</div>
              </div>
            </a>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Circle;
