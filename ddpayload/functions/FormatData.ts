const formatData = (updatedData: any) => {

    const send: any = {};

    Object.entries(updatedData).map((ud: any) => {
        if(ud[1]?.type === 'string') {
            send[ud[1].key] = ud[1].value;
        } else if(ud[1]?.type === 'object') {
            send[ud[1].key] = {};

           if(Object.entries(ud[1].children).length > 0) {
                Object.assign(send[ud[1].key], formatData(ud[1].children));
           }
        } else if(ud[1]?.type === 'array') {
            send[ud[1].key] = [];

            if(Object.entries(ud[1].children).length > 0) {
                let arr: any = [];

                Object.entries(formatData(ud[1].children)).map(ar => {
                    arr.push(ar[1]);
                })

                send[ud[1].key] = arr;
            }
        }
    })

    return send
}


export default formatData;