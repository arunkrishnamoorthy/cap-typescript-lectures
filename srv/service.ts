import { Request,Service } from "@sap/cds/apis/services";
import { Rooms, Lectures, Professors, Courses } from './service-types'

module.exports = async (srv: Service) => {
    const { Rooms, Lectures } = srv.entities;

    srv.before("CREATE",Lectures, async (req: Request) => {
        const data = req.data as Lectures;
        const { starttime, endtime, room_ID } = data;
        const start = new Date(starttime).toISOString();
        const end = new Date(endtime).toISOString();
        const lectures = await srv.read(Lectures).where({
            room_ID: room_ID,
            and: {
                starttime: { ">": start },
                and: {
                    starttime: { "<": end } },
                or: {
                    endtime: { ">" : start },
                    and: {
                        endtime: { "<": end }
                    },
                    or: {
                        starttime: { "<" : start }, 
                        and: {
                            endtime: { ">": end }
                        }
                    }
                }
            }
        }) as Lectures[];
        if( lectures.length > 0 ) return req.error(400,"Selected rooms not available");
    });

}