import Link from 'next/link';
import React, {useState} from 'react';
import Check from '../../public/images/svg/check.svg';

export default function WeatherModal({
  state,
  data,
  header,
  des,
  active,
  onClose,
}) {
  const [modal, setModal] = useState({
    active: active,
  });

  // TODO CLEAN UP
  return state ? (
    <section id="citySelector">
      <h3 className="flex-none">{header}</h3>
      <ul className="py-2xl w-100">
        {data.map((city, index) => {
          return (
            <li
              key={data.city}
              className={modal.active === index ? 'active' : ''}
              onClick={e => {
                setModal({
                  active: index,
                });
              }}
            >
              <span>{city.city}</span>
              <span>{city.plz}</span>

              {active === index ? <i name={'check circle'} /> : false}
            </li>
          );
        })}
      </ul>

      <div className="spaced mt-xs">
        <button
          className="btn-secondary"
          onClick={() => {
            onClose();
          }}
        >
          Abbrechen
        </button>

        {!Number.isNaN(Number(modal.active)) ? (
          <Link href="/weather">
            <button
              onClick={() => {
                console.log(data[modal.active]);
                if (data[modal.active].lastSearch === 'home')
                  localStorage.home = data[modal.active].city;
                onClose();
              }}
              className="btn-success"
            >
              Ok
            </button>
          </Link>
        ) : (
          <button disabled="true" className="btn-success">
            Ok
          </button>
        )}
      </div>

      <Check
        className="animate-up"
        style={{
          fill: 'white',
          fillOpacity: '0.05',
          position: 'absolute',
          bottom: '-25px',
          left: '180px',
          width: '350px',
        }}
      />
    </section>
  ) : (
    <></>
  );
}
