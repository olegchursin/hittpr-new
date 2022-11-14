import { FC } from 'react';

const BackgroundActor: FC = () => {
  return (
    <div>
      <div className="mb-20">
        <h4 className="mb-10">HBO</h4>
        <ul>
          <li>“GOSSIP GIRL” 2022</li>
          <li>“AND JUST LIKE THAT” ( “SEX AND THE CITY”) 2022</li>
          <li>“WE OWN THIS CITY” 2022</li>
        </ul>
      </div>

      <div>
        <h4 className="mb-10">SHOWTIME</h4>
        <ul>
          <li>“CITY ON A HILL”</li>
          <li>“THREE WOMEN” (coming soon)</li>
        </ul>
      </div>
    </div>
  );
};

export default BackgroundActor;
