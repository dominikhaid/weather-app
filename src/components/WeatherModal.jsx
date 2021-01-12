import {useRouter} from 'next/router';
import React, {useState} from 'react';
import Check from '@/public/images/svg/check.svg';

export default function WeatherModal({
  state,
  data,
  header,
  des,
  active,
  onClose,
  appStates,
}) {
  const [modal, setModal] = useState({
    active: active,
  });

  const router = useRouter();

  return state ? (
    <section style={{top: '0', left: '0'}} id="citySelector">
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

      <div className="spaced mt-xs relative z-50">
        <button
          className="btn-secondary"
          onClick={() => {
            onClose();
          }}
        >
          Abbrechen
        </button>

        {!Number.isNaN(Number(modal.active)) ? (
          <button
            onClick={e => {
              e.preventDefault();
              if (
                data[modal.active].weatherView === 'home' &&
                data[modal.active].city &&
                data[modal.active].Key
              ) {
                localStorage.home = JSON.stringify({
                  city: data[modal.active].city,
                  Key: data[modal.active].Key,
                  hometown: true,
                });
                router.push('/');
              } else {
                appStates.updateCitys({...data[0], activeCity: true});
                router.push('/weather');
              }
              onClose();
            }}
            className="btn-success"
          >
            Ok
          </button>
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
