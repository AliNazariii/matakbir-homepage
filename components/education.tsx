import { Card } from 'antd'
import { ReadFilled } from '@ant-design/icons'

function Education() {
    return(
      <Card className="card">
        <h2 className="card-title">Education</h2>
        <div className="card-paragraph">
          <div className="card-item">
            <ReadFilled className="card-item icons-in-cards" /> <b className="card-bolds">B.Sc. Computer Engineering</b>
            <br /> Amirkabir University of Technology (2017 - Present)
            <br /> GPA: 16.12/20
          </div>
          <div className="card-item">
            <ReadFilled className="card-item icons-in-cards" /> <b className="card-bolds">Diploma Mathematics</b>
            <br /> Alborz High School (2013 - 2017)
            <br /> GPA: 19.86/20
          </div>
        </div>
      </Card>
    )
}

export default Education