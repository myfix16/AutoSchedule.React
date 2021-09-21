export default {
    'GET /api/getAvailableCourse': (req, res) => {
        res.send({
            success: true,
            data: 
                [
                    {
                      "name": "CSC3001 LEC",
                    //   "priority": 0
                    },
                  {
                      "name": "CSC3002 LEC",
                    //   "priority": 0
                    },
                    {
                        "name": "CSC3150 LEC",
                      //   "priority": 0
                      },
                    {
                        "name": "CSC4008 LEC",
                      //   "priority": 0
                      }
                  ]
        });
    }
}