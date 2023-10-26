import './CardDaysStyle.css';

export const CardDaysComp = ({day, temperature, img}) => {

    // const days = []

  return (
    <div className="card-day">
        <p>{day}</p>
        <img src={img} alt="Sol" />
        <p>{temperature}</p>
    </div>
  )
}
