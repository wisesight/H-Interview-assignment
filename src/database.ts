const data = [
    {
        assignedDoctor: 'Strange',
        patientName: 'John',
        vaccineType: 'Sinowarp',
        vaccineAppointmentDate: '',
        vaccineStatus: 'READY',
        vaccineTransactionStatus: 'PAID',
    },
    {
        assignedDoctor: 'Who',
        patientName: 'Johny',
        vaccineType: 'Sinowarp',
        vaccineAppointmentDate: '',
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
        vaccineAppointmentDate: '',
        vaccineStatus: 'IN_TRANSIT',
        vaccineTransactionStatus: 'PAID',
    },
    {
        assignedDoctor: 'Strange',
        patientName: 'Magna',
        vaccineType: 'Noderna',
        vaccineAppointmentDate: '',
        vaccineStatus: 'IN_TRANSIT',
        vaccineTransactionStatus: 'WAIT_FOR_PAYMENT',
    },
];

export class Database {
    public static find(option: Record<string, any>) {
        let result: Record<string,any>[] = [];
        for (const row of data) {
            let misMatch = false;
            for (const [key, value] of Object.entries(option)) {
                if (row[key] !== value) {
                    misMatch = true;
                    break;
                }
            }
            if(!misMatch) {
                result.push(row);
            }
        }
        return result;
    }
}