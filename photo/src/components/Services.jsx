import React from 'react'
import ServicesCard from './ServicesCard'
import meeting from '../img/services/meeting.svg'
import filming from '../img/services/filming.svg'
import retouch from '../img/services/retouch.svg'

const Services = () => {
  return (
    <div className="services">
      <div className="container">
        <div className="services__body">
          <ServicesCard
            image={meeting}
            title={'Зустріч'}
            text={'На зустрічі ми знайомимся та промовляємо день фотосесії'}
          />
          <ServicesCard
            image={filming}
            title={'Зйомка'}
            text={'Я роблю все можливе для отримання максимального результату'}
          />
          <ServicesCard
            image={retouch}
            title={'Ретуш'}
            text={'Роблю обробку ваших фотографій враховуючи ваші побажання'}
          />
          <ServicesCard
            image={meeting}
            title={'Результат'}
            text={'У вас буде щонайменше 50 красивих фотографій'}
          />
        </div>
      </div>
    </div>
  )
}

export default Services
