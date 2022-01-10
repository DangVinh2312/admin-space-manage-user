export default function FormInput(props) {
    const {label} = props;
    return <div className="form-group">
        {
            label && <label className="col-sm-2 col-sm-2 control-label"> {label}</label> || ''
        }
        <div className="col-sm-10">
            <input {...props} className="form-control" />
        </div>
    </div>
}