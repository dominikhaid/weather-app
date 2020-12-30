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

  return state ? (
    <section className="modal">
      <h3 className="text-left text-lg mb-5 font-semibold">{header}</h3>
      <ul>
        {data.map((city, index) => {
          return (
            <li
              key={data.city}
              className={
                modal.active === index
                  ? 'bg-green-100 cursor-pointer border-b w-full p-2 border-gray-900 hover:bg-green-100'
                  : 'border-b bg-white w-full p-2 border-gray-900 hover:bg-green-100 cursor-pointer'
              }
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
        {modal.active !== false ? (
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
          <button disabeld="true" className="btn-success">
            Ok
          </button>
        )}
      </div>
    </section>
  ) : (
    <></>
  );
}
