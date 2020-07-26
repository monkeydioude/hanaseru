import { Button } from 'antd'
import 'antd/dist/antd.css';

export default () => {
    return (
        <div className="col">
            <div className="grid">
                <Button className="col-6_sm-12">Apprendre les Hiragana</Button>
                <Button className="col-6_sm-12">Apprendre les Katakana</Button>
            </div>
        </div>
    )
}