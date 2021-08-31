const data = [
    {
        assignedDoctor: 'Strange',
        patientName: 'John',
        vaccineType: 'Sinowarp',
        vaccineAppointmentDate: '2021-08-05T14:30:00.000Z',
        vaccineStatus: 'READY',
        vaccineTransactionStatus: 'PAID',
    },
    {
        assignedDoctor: 'Who',
        patientName: 'Johny',
        vaccineType: 'Sinowarp',
        vaccineAppointmentDate: '2021-08-06T14:30:00.000Z',
        vaccineStatus: 'READY',
        vaccineTransactionStatus: 'PAID',
    },
    {
        assignedDoctor: 'Who',
        patientName: 'Tuu',
        vaccineType: 'Sinowarp',
        vaccineAppointmentDate: '',
        vaccineStatus: 'READY',
        vaccineTransactionStatus: 'WAIT_FOR_PAYMENT',
    },
    {
        assignedDoctor: 'Who',
        patientName: 'Lisa',
        vaccineType: 'Noderna',
        vaccineAppointmentDate: '2021-12-10T14:30:00.000Z',
        vaccineStatus: 'IN_TRANSIT',
        vaccineTransactionStatus: 'PAID',
    },
    {
        assignedDoctor: 'Strange',
        patientName: 'Magna',
        vaccineType: 'Noderna',
        vaccineAppointmentDate: '2021-12-10T15:30:00.000Z',
        vaccineStatus: 'IN_TRANSIT',
        vaccineTransactionStatus: 'WAIT_FOR_PAYMENT',
    },
];

export class Database {
    public static find(option: Record<string, any>) {
        let result: Record<string,any>[] = [];
        for (const row of data) {
            let found = false;
            for (const [key, value] of Object.entries(option)) {
                if (row[key] !== value) {
                    found = true;
                    break;
                }
            }
            if(!found) {
                result.push(row);
            }
        }
        return result;
    }
}
