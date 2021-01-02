import Link from 'next/link';
import React, {useState} from 'react';

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
    <section className="modal">
      <h3 className="text-left text-lg mb-5 font-semibold">{header}</h3>
      <ul className="py-2xl">
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

      <div className="spaced mt-10">
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
    </section>
  ) : (
    <></>
  );
}
