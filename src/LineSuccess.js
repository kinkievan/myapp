import 'antd/dist/antd.css';
import React, { Component } from 'react';
import {
    Card,
    Avatar,
} from 'antd';
class LineSuccess extends Component {
    constructor(props) {
        super(props);
        this.state = {
            imageUrl: '',
        };
    }

    componentDidMount() {
        const query = new URLSearchParams(
            this.props.location.search
        );
        const url = query.get("url")
        if (url) {
            this.setState({ imageUrl: url })
        }
    }
    render() {
        return (
            <div style={{ textAlign: 'center' }} >

                <img style={{ margin: 49 }} width={89} src='data:image/png;base64,iVBORw0KGgoAAAANSUhEUgAAALIAAABACAMAAACJDt1IAAAABGdBTUEAALGPC/xhBQAAAAFzUkdCAK7OHOkAAAHvUExURUdwTADCAAC/AAC+AAC9AAC/AADAAAD/AADEAAC+AAC/AAC/AAD/AADBAAC/AAC+AAC+AAC9AAC/AAC+AAC5AAC5AAC+AADAAAD/AADCAADMAADaAAC5AAC+AADEAAC5AAC/AADMAAC/AAC/AADAAAC8AAC/AAC+AAC+AAC5AAC+AAC+AAC6AAC+AADAAAC/AAC/AAC+AADGAAC+AADQAAC+AAC5AAC+AAC+AAC+AAC+AADEAADBAAC/AAC+AAC+AAC5AADFAAC/AADFAADMAAC/AAC/AAC+AAC+AAC/AAC/AAC9AAC/AAC/AAC+AAC+AADJAADIAAC+AAC+AAC/AAC8AAC+AAC/AAC+AADGAAC/AAC+AAC+AAC+AAC/AAC+AAC+AADDAAC9AAC/AAC8AADGAAC9AADAAAC/AADAAADAAAC/AAC+AAC9AAC+AAC+AADBAADBAADEAAC7AAC9AAC5AAC/AAC+AAC6AAC7AAC+AAC+AAC+AAC9AADAAAC+AADUAAC+AAC/AAC/AAC/AAC+AADCAAC/AAC8AADDAAC8AAC+AAC+AAC/AAC/AAC/AAC+AAC+AAC+AAC9AADBAAC/AAC+AAC9AADBAAC5AAC/AAC8AAC+AAC+AAC+AADCAAC+AAC/AAC/AAC+AAC+AFzjVhEAAACkdFJOUwAqEG7DvCkBGmdlRAJGieSLnyAz+/79JQMmCgfn/CPrWQUMFEHqYL2K9rbG8sJSwHTgCfEL9fOd5eGZDUJI+Ln6FigfD304mp5pZJsEsD/5Ew7ZgojPwZxmG5Rq3JKkW0srvzDXEs5eeVFayG+nfmsZOiff1u8s1ePurdTK4kl3Bs2YgcSHFbjmEdNXzHwIqK7d0d4hhY67HQsYUGM3fzs7YZCPZx0n9wAAAsBJREFUaN7V2vVTG1EQB/CFtjkKqYR4QhJIAkULxYoVd+ru7u7u7u4u+4eWobkj73EvueTu6O33x51d9pMbBpbhAACkREBr7IlI6mV76mlJMC6lz7/Gjx+6MRHPLacGb3CsWh7ARcVK+ebtBqVculE87q1xyW2hqhylHK5VyqkysbAruXLNnp48kDzg8svlG8ll907h+NXkvitK+S5qi6sfoJOphNOTZzEDZXK5kilHNgmmA6xgpfxN4dFIxvFnxBZy0pNnMgOz1T8JrvepT+eybXkyWasYbaaRcQ09sqeDHBmLesiRsUsiR8aD9MiuU+TI2LqPHBmXGU/uNZmMRw0nx8wmr3AaSw49A7PJuHVVNuQCm3p6G8F8Mh7LhlyYUmA2GfPpkSvOkyPj2QA5Mg7TI+MOeuRmPzkyrguSI+PmzMgH5gjinT4yLjToxmgzkLyA/SuKX3Wu0KCz6LNZT7nuKb/qSInF7+UZ4QZ+V7nVyfCE3+W+bnUytPHLInlWJ9c/5rfV+ixOBlsTv+6O1clQxq/zxK1Ohu38vof3rU6OruYXPnhkcTLs6eQ33tNL9pr1CztBhhNTfjrrJDdFTX7KAJdTCwTkonnquVgTB9PJuWeyIf+Pe1khw2A3OTLU0SNLleTIEGshR4blIXJkOE6PbN9NjgwnS80jL54ryJZ2PWRY4s6IPDRfPeUjjVPI4uwt0UOGtRmRxXnt007G07rIS6uMIWNfBmSnLjL0XTKGbJs+MhyiR4Zt9MjB/eTI4K0mR4bD9MiwgR45cIEcGXZVGECOZNA7kZeq/1CAF0y5WHTSjDJtrnqZ3KyV8RbgncbWludqF86bqGzpSH6fsLVfeIY5mCtMKb/XyHg1fupI/niBhnz7pHz1n78diQwPxCYtg3/ksuN7T4q3ckfG5Lahr5OvLEo/fuWnz+iXdqCYv547lamN46RkAAAAAElFTkSuQmCC' />
                <p />
                <Avatar shape="square" size={80} src={this.state.imageUrl} />
                <p />
                <h2>資料綁定完成</h2>
            </div >
        );
    }
}
export default LineSuccess;

