import './Card.css';

function Card() {
  return (
    <div className='container'>
      <form>
        <div className='form-container'>
          <div className='input-container'>
            <label htmlFor='day'>DAY</label>
            <input type='number' className='input' />
          </div>
          <div className='input-container'>
            <label htmlFor='month'>MONTH</label>
            <input type='number' className='input' />
          </div>
          <div className='input-container'>
            <label htmlFor='year'>YEAR</label>
            <input type='number' className='input' />
          </div>
        </div>
      </form>
    </div>
  );
}

export default Card;
