export const GAME_INFO_MOCK = {
  "@type": ".Game",
  id: "V75_2023-05-27_5_5",
  status: "results",
  pools: {
    V75: {
      "@type": ".MarkingBetPool",
      id: "V75_2023-05-27_5_5",
      status: "results",
      timestamp: "2023-05-27 18:21:26",
      turnover: 11703715400,
      addOns: ["boost"],
      result: {
        "@type": ".MarkingBetResult",
        payouts: {
          "5": {
            systems: 2661455,
            jackpot: true,
          },
          "6": {
            systems: 198719,
            payout: 7600,
          },
          "7": {
            systems: 4478,
            payout: 679400,
          },
        },
        boostInfo: {
          boostCode: "672",
          boostPayouts: [
            {
              correct: 7,
              amount: 6794000,
              multiplier: 10,
            },
            {
              correct: 6,
              amount: 760000,
              multiplier: 100,
            },
            {
              correct: 5,
              amount: 0,
              multiplier: 100,
            },
          ],
          resultComplete: true,
        },
      },
      harry: false,
      systemCount: 1490264,
      payouts: {
        "5": 3042966000,
        "6": 1521483000,
        "7": 3042966000,
      },
      potentialPayoutRaceId: "2023-05-27_5_12",
    },
  },
  races: [
    {
      id: "2023-05-27_5_5",
      name: "Gränges - Lady Snärts lopp - STL Stoeliten, Försök 6 (Final Solvalla 26 december)",
      date: new Date("2023-05-27"),
      number: 5,
      distance: 1640,
      startMethod: "auto",
      startTime: new Date("2023-05-27T15:00:58"),
      scheduledStartTime: new Date("2023-05-27T15:00:00"),
      prize:
        "Pris: 220.000-110.000-62.000-35.000-22.000-15.000-10.000-6.000 kr (8 priser). Lägst 2.500 kr till alla tävlande.",
      terms: [
        "3-åriga och äldre ston lägst 500.001 kr. Körsvenskrav kat. 1. Körsvenner födda 050527 eller tidigare.",
        "Svenska Travligan hederspris till segrande hästs ägare och hästskötare. Solvallas hederspris till segrande hästs ägare, tränare, körsven, uppfödare och hästskötare. Hederstäcke till segrande häst.",
        "1640 m. Autostart. 10 startande.",
      ],
      sport: "trot",
      track: {
        id: 5,
        name: "Solvalla",
        condition: "light",
        countryCode: "SE",
      },
      result: {
        victoryMargin: "5 längder",
        scratchings: [7, 8],
      },
      status: "results",
      mediaId: "1395466309407",
      pools: {
        vinnare: {
          "@type": ".VinnarePool",
          id: "vinnare_2023-05-27_5_5",
          status: "results",
          timestamp: "2023-05-27 15:06:49",
          turnover: 278074000,
          result: {
            "@type": ".VinnarePoolRaceResult",
            winners: [
              {
                number: 5,
                odds: 213,
              },
            ],
          },
        },
        plats: {
          "@type": ".PlatsPool",
          id: "plats_2023-05-27_5_5",
          status: "results",
          timestamp: "2023-05-27 15:06:49",
          turnover: 278074000,
          result: {
            "@type": ".PlatsPoolRaceResult",
            winners: {
              first: [
                {
                  number: 5,
                  odds: 123,
                },
              ],
              second: [
                {
                  number: 9,
                  odds: 251,
                },
              ],
              third: [
                {
                  number: 1,
                  odds: 318,
                },
              ],
            },
          },
        },
        tvilling: {
          "@type": ".TvillingPool",
          id: "tvilling_2023-05-27_5_5",
          status: "results",
          timestamp: "2023-05-27 15:06:50",
          turnover: 278074000,
          result: {
            "@type": ".TvillingPoolRaceResult",
            winners: [
              {
                combination: [5, 9],
                odds: 1351,
              },
            ],
          },
        },
        komb: {
          "@type": ".KombPool",
          id: "komb_2023-05-27_5_5",
          status: "results",
          timestamp: "2023-05-27 15:06:50",
          turnover: 278074000,
          result: {
            "@type": ".KombPoolRaceResult",
            winners: [
              {
                combination: [5, 9],
                odds: 1738,
              },
            ],
          },
        },
        trio: {
          "@type": ".TrioPool",
          id: "trio_2023-05-27_5_5",
          status: "results",
          timestamp: "2023-05-27 15:06:50",
          turnover: 278074000,
          result: {
            "@type": ".TrioPoolRaceResult",
            winners: [
              {
                combination: [5, 9, 1],
                odds: 11915,
              },
            ],
          },
        },
        V75: {
          "@type": ".Pool",
          result: {
            "@type": ".MarkingBetRacePoolResult",
            systems: "783093",
            value: {
              amount: 3800,
            },
            winners: [5],
            reserveOrder: [5, 3, 10, 9, 1, 2, 4, 6, 7, 8],
          },
        },
      },
      subRows: [
        {
          number: 1,
          postPosition: 1,
          distance: 1640,
          horse: {
            id: 767802,
            name: "Filippa B.J.",
            age: 5,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 11,
                tenths: 3,
              },
            },
            trainer: {
              id: 641811,
              firstName: "Sybille",
              lastName: "Tinter",
              shortName: "Tin Sy",
              location: "Sala",
              birth: 1982,
              homeTrack: {
                id: 23,
                name: "Romme",
              },
              license: "A-tränare: träna, köra",
              silks: "Grön, gula hängslen och ärmbindel; grön",
              statistics: {
                years: {
                  "2022": {
                    starts: 240,
                    earnings: 283430000,
                    placement: {
                      "1": 38,
                      "2": 38,
                      "3": 22,
                    },
                    winPercentage: 1583,
                  },
                  "2023": {
                    starts: 76,
                    earnings: 103500000,
                    placement: {
                      "1": 13,
                      "2": 13,
                      "3": 8,
                    },
                    winPercentage: 1710,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 1093734,
            color: "brun",
            homeTrack: {
              id: 23,
              name: "Romme",
            },
            owner: {
              id: 814774,
              name: "Pohlmann Gabriele",
              location: "Tyskland",
            },
            breeder: {
              id: 563847,
              name: "Johansson Maud",
              location: "Östhammar",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 14,
                  earnings: 73100000,
                  placement: {
                    "1": 3,
                    "2": 4,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 8,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 3,
                      },
                      place: 0,
                    },
                  ],
                },
                "2023": {
                  starts: 3,
                  earnings: 12500000,
                  placement: {
                    "1": 2,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 3,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 28,
                earnings: 109373400,
                placement: {
                  "1": 10,
                  "2": 8,
                  "3": 1,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 3,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 8,
                    },
                    place: 0,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 3,
                    },
                    place: 0,
                    year: "2022",
                  },
                ],
                winPercentage: 3571,
                placePercentage: 6785,
                earningsPerStart: 3906192,
                startPoints: 2940,
              },
              lastFiveStarts: {
                averageOdds: 428,
              },
            },
            pedigree: {
              father: {
                id: 679657,
                name: "Muscle Mass",
                nationality: "US",
              },
              mother: {
                id: 607858,
                name: "Gloire d'Inverne",
              },
              grandfather: {
                id: 565421,
                name: "Sugar Trader",
                nationality: "US",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 70381,
            firstName: "Jorma",
            lastName: "Kontio",
            shortName: "Kon Jo",
            location: "Enköping",
            birth: 1953,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Blå, vit bröstband och blå ärmar; vit",
            statistics: {
              years: {
                "2022": {
                  starts: 1314,
                  earnings: 1810214700,
                  placement: {
                    "1": 198,
                    "2": 115,
                    "3": 135,
                  },
                  winPercentage: 1506,
                },
                "2023": {
                  starts: 422,
                  earnings: 566544200,
                  placement: {
                    "1": 48,
                    "2": 45,
                    "3": 34,
                  },
                  winPercentage: 1137,
                },
              },
            },
          },
          result: {
            place: 3,
            finishOrder: 3,
            kmTime: {
              minutes: 1,
              seconds: 10,
              tenths: 8,
            },
            prizeMoney: 62000,
            finalOdds: 22.27,
            startNumber: 1,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 2227,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 318,
              maxOdds: 318,
              odds: 318,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 379,
            },
          },
          videos: [
            {
              mediaId: "1395450437418",
              timestamp: "2023-05-27T13:34:54",
            },
            {
              mediaId: "1395451973208",
              timestamp: "2023-05-27T13:44:49",
            },
            {
              mediaId: "1395454533483",
              timestamp: "2023-05-27T13:54:54",
            },
          ],
        },
        {
          number: 2,
          postPosition: 2,
          distance: 1640,
          horse: {
            id: 745251,
            name: "Racing Brodda",
            age: 8,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 10,
                tenths: 5,
              },
            },
            trainer: {
              id: 593763,
              firstName: "Mattias",
              lastName: "Djuse",
              shortName: "Dju Ma",
              location: "Ekolsund",
              birth: 1989,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, grå sidor; svart",
              statistics: {
                years: {
                  "2022": {
                    starts: 658,
                    earnings: 1516728900,
                    placement: {
                      "1": 122,
                      "2": 100,
                      "3": 87,
                    },
                    winPercentage: 1854,
                  },
                  "2023": {
                    starts: 277,
                    earnings: 721105000,
                    placement: {
                      "1": 48,
                      "2": 33,
                      "3": 40,
                    },
                    winPercentage: 1732,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 7644250,
            color: "mörkbrun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 134918,
              name: "Easy KB",
              location: "Uppsala",
            },
            breeder: {
              id: 230444,
              name: "Brodda Stuteri AB",
              location: "Skurup",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 11,
                  earnings: 55000000,
                  placement: {
                    "1": 3,
                    "2": 2,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 0,
                      },
                      place: 2,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 5,
                      },
                      place: 1,
                    },
                  ],
                },
                "2023": {
                  starts: 6,
                  earnings: 29050000,
                  placement: {
                    "1": 1,
                    "2": 0,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 2,
                      },
                      place: 3,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 3,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 74,
                earnings: 764425000,
                placement: {
                  "1": 16,
                  "2": 15,
                  "3": 13,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 5,
                    },
                    place: 3,
                    year: "2021",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 4,
                    },
                    place: 4,
                    year: "2020",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 5,
                    },
                    place: 5,
                    year: "2021",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 5,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 5,
                    },
                    place: 2,
                    year: "2021",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 9,
                    },
                    place: 2,
                    year: "2020",
                  },
                ],
                winPercentage: 2162,
                placePercentage: 5945,
                earningsPerStart: 10330067,
                startPoints: 3220,
              },
              lastFiveStarts: {
                averageOdds: 813,
              },
            },
            pedigree: {
              father: {
                id: 670752,
                name: "Prodigious",
                nationality: "FR",
              },
              mother: {
                id: 574795,
                name: "Ronda Brick",
              },
              grandfather: {
                id: 161030,
                name: "Super Arnie",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 740606,
            firstName: "Magnus A",
            lastName: "Djuse",
            shortName: "Dju MA",
            location: "Örsundsbro",
            birth: 2000,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Svart, blå hängslen och vitt lo fält; vit",
            statistics: {
              years: {
                "2022": {
                  starts: 1399,
                  earnings: 3241116300,
                  placement: {
                    "1": 255,
                    "2": 187,
                    "3": 154,
                  },
                  winPercentage: 1822,
                },
                "2023": {
                  starts: 509,
                  earnings: 1255379000,
                  placement: {
                    "1": 81,
                    "2": 66,
                    "3": 70,
                  },
                  winPercentage: 1591,
                },
              },
            },
          },
          result: {
            place: 5,
            finishOrder: 5,
            kmTime: {
              minutes: 1,
              seconds: 10,
              tenths: 9,
            },
            prizeMoney: 22000,
            finalOdds: 28.38,
            startNumber: 2,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 2838,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 358,
              maxOdds: 358,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 253,
            },
          },
          videos: [
            {
              mediaId: "1395460165258",
              timestamp: "2023-05-27T14:06:23",
            },
            {
              mediaId: "1395464261033",
              timestamp: "2023-05-27T14:35:18",
            },
          ],
        },
        {
          number: 3,
          postPosition: 3,
          distance: 1640,
          horse: {
            id: 765670,
            name: "Imhatra Am",
            age: 5,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 9,
                tenths: 7,
              },
            },
            trainer: {
              id: 92281,
              firstName: "Jörgen",
              lastName: "Westholm",
              shortName: "Wes Jö",
              location: "Sala",
              birth: 1972,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, vitt bröstb, gröna ärmar; grön",
              statistics: {
                years: {
                  "2022": {
                    starts: 1038,
                    earnings: 2187137100,
                    placement: {
                      "1": 152,
                      "2": 130,
                      "3": 121,
                    },
                    winPercentage: 1464,
                  },
                  "2023": {
                    starts: 306,
                    earnings: 636645900,
                    placement: {
                      "1": 57,
                      "2": 37,
                      "3": 31,
                    },
                    winPercentage: 1862,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 4099258,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 708061,
              name: "Stall Courant AB",
              location: "Heby",
            },
            breeder: {
              id: 686741,
              name: "Am Bloodstock AB",
              location: "Stockholm",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 17,
                  earnings: 218532500,
                  placement: {
                    "1": 5,
                    "2": 5,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 2,
                      },
                      place: 2,
                    },
                  ],
                },
                "2023": {
                  starts: 5,
                  earnings: 51200900,
                  placement: {
                    "1": 1,
                    "2": 0,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 9,
                        tenths: 7,
                      },
                      place: 3,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 3,
                      },
                      place: 6,
                    },
                  ],
                },
              },
              life: {
                starts: 40,
                earnings: 409925800,
                placement: {
                  "1": 11,
                  "2": 9,
                  "3": 3,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 9,
                      tenths: 7,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 6,
                    },
                    place: 2,
                    year: "2022",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 4,
                    },
                    place: 0,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 3,
                    },
                    place: 6,
                    year: "2023",
                  },
                  {
                    code: "aaK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 9,
                      tenths: 9,
                    },
                    place: 6,
                    year: "2021",
                  },
                ],
                winPercentage: 2750,
                placePercentage: 5750,
                earningsPerStart: 10248145,
                startPoints: 5569,
              },
              lastFiveStarts: {
                averageOdds: 3156,
              },
            },
            pedigree: {
              father: {
                id: 685124,
                name: "Muscle Hill",
                nationality: "US",
              },
              mother: {
                id: 634740,
                name: "Tamla Celeber",
              },
              grandfather: {
                id: 603016,
                name: "Cantab Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 722626,
            firstName: "Mats E",
            lastName: "Djuse",
            shortName: "Dju ME",
            location: "Hudiksvall",
            birth: 1998,
            homeTrack: {
              id: 17,
              name: "Hagmyren",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Röd, gul hästsko; röd",
            statistics: {
              years: {
                "2022": {
                  starts: 1665,
                  earnings: 2510218300,
                  placement: {
                    "1": 210,
                    "2": 187,
                    "3": 169,
                  },
                  winPercentage: 1261,
                },
                "2023": {
                  starts: 612,
                  earnings: 927346300,
                  placement: {
                    "1": 88,
                    "2": 85,
                    "3": 52,
                  },
                  winPercentage: 1437,
                },
              },
            },
          },
          result: {
            place: 4,
            finishOrder: 4,
            kmTime: {
              minutes: 1,
              seconds: 10,
              tenths: 9,
            },
            prizeMoney: 35000,
            finalOdds: 3.48,
            startNumber: 3,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 348,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 137,
              maxOdds: 137,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 2703,
            },
          },
          videos: [
            {
              mediaId: "1395460165135",
              timestamp: "2023-05-27T14:01:18",
            },
            {
              mediaId: "1395460677124",
              timestamp: "2023-05-27T14:11:46",
            },
          ],
        },
        {
          number: 4,
          postPosition: 4,
          distance: 1640,
          horse: {
            id: 789711,
            name: "A Perfect Dutchess",
            nationality: "US",
            age: 5,
            sex: "mare",
            record: {
              code: "aaK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 11,
                tenths: 5,
              },
            },
            trainer: {
              id: 99400,
              firstName: "Frode",
              lastName: "Hamre",
              shortName: "Ham Fr",
              location: "Norge",
              birth: 1964,
              license: "A-tränare (utland): träna, köra",
              silks: "Ljusblå, mörkblå axelparti och ärm; vit",
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
              },
              back: {
                hasShoe: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 800184,
            color: "brun",
            owner: {
              id: 226009,
              name: "Djuve Eirik",
              location: "Norge",
            },
            breeder: {
              id: 728373,
              name: "Detweiler Robert S",
              location: "USA",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 9,
                  earnings: 24611500,
                  placement: {
                    "1": 5,
                    "2": 1,
                    "3": 3,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 0,
                      },
                      place: 1,
                    },
                  ],
                },
                "2023": {
                  starts: 5,
                  earnings: 15191700,
                  placement: {
                    "1": 3,
                    "2": 1,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 4,
                      },
                      place: 1,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 1,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 30,
                earnings: 80018400,
                placement: {
                  "1": 12,
                  "2": 4,
                  "3": 8,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 0,
                    },
                    place: 3,
                    year: "2022",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 1,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "aaK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 5,
                    },
                    place: 3,
                    year: "2020",
                  },
                ],
                winPercentage: 4000,
                placePercentage: 8000,
                earningsPerStart: 2667280,
                startPoints: 2667,
              },
              lastFiveStarts: {
                averageOdds: 284,
              },
            },
            pedigree: {
              father: {
                id: 685124,
                name: "Muscle Hill",
                nationality: "US",
              },
              mother: {
                id: 725293,
                name: "Asixpakfromperfect",
                nationality: "US",
              },
              grandfather: {
                id: 579264,
                name: "Windsong's Legacy",
                nationality: "US",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 722458,
            firstName: "Magnus Teien",
            lastName: "Gundersen",
            shortName: "Gun MT",
            location: "Norge",
            birth: 1996,
            license: "Körlicens, utländsk",
            silks: "Mörkblå, vit/röd sömmar; mblå",
          },
          result: {
            place: 7,
            finishOrder: 7,
            kmTime: {
              minutes: 1,
              seconds: 11,
              tenths: 4,
            },
            prizeMoney: 10000,
            finalOdds: 56.05,
            startNumber: 4,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 5605,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 657,
              maxOdds: 657,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 87,
            },
          },
          videos: [
            {
              mediaId: "1395456581411",
              timestamp: "2023-05-27T14:13:31",
            },
            {
              mediaId: "1395457093359",
              timestamp: "2023-05-27T14:02:53",
            },
          ],
        },
        {
          number: 5,
          postPosition: 5,
          distance: 1640,
          horse: {
            id: 790541,
            name: "Zeudi Amg",
            nationality: "IT",
            age: 8,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 9,
                tenths: 9,
              },
            },
            trainer: {
              id: 594966,
              firstName: "Alessandro",
              lastName: "Gocciadoro",
              shortName: "Goc Al",
              location: "Italien",
              birth: 1975,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: (Sv/utland): träna, köra",
              silks: "Gul, röd; röd",
              statistics: {
                years: {
                  "2022": {
                    starts: 193,
                    earnings: 786391900,
                    placement: {
                      "1": 36,
                      "2": 21,
                      "3": 12,
                    },
                    winPercentage: 1865,
                  },
                  "2023": {
                    starts: 37,
                    earnings: 233620500,
                    placement: {
                      "1": 10,
                      "2": 6,
                      "3": 5,
                    },
                    winPercentage: 2702,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
              },
              back: {
                hasShoe: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 2515391,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 821270,
              name: "Rondena Aldo",
              location: "Italien",
            },
            breeder: {
              id: 821228,
              name: "Pozzobon Gianfranco",
              location: "Italien",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 10,
                  earnings: 134947800,
                  placement: {
                    "1": 3,
                    "2": 2,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 9,
                        tenths: 9,
                      },
                      place: 2,
                    },
                  ],
                },
                "2023": {
                  starts: 3,
                  earnings: 7595000,
                  placement: {
                    "1": 0,
                    "2": 0,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 6,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 57,
                earnings: 251539100,
                placement: {
                  "1": 25,
                  "2": 8,
                  "3": 5,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 9,
                      tenths: 9,
                    },
                    place: 2,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 6,
                    },
                    place: 5,
                    year: "2023",
                  },
                ],
                winPercentage: 4385,
                placePercentage: 6666,
                earningsPerStart: 4412966,
                startPoints: 5637,
              },
              lastFiveStarts: {
                averageOdds: 1739,
              },
            },
            pedigree: {
              father: {
                id: 755928,
                name: "Ideale Luis",
                nationality: "IT",
              },
              mother: {
                id: 790540,
                name: "Ironica Spin",
                nationality: "IT",
              },
              grandfather: {
                id: 197809,
                name: "Ganymede",
                nationality: "FR",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 594966,
            firstName: "Alessandro",
            lastName: "Gocciadoro",
            shortName: "Goc Al",
            location: "Italien",
            birth: 1975,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: (Sv/utland): träna, köra",
            silks: "Gul, röd; röd",
            statistics: {
              years: {
                "2022": {
                  starts: 100,
                  earnings: 450983500,
                  placement: {
                    "1": 21,
                    "2": 13,
                    "3": 6,
                  },
                  winPercentage: 2100,
                },
                "2023": {
                  starts: 27,
                  earnings: 211987200,
                  placement: {
                    "1": 8,
                    "2": 5,
                    "3": 4,
                  },
                  winPercentage: 2962,
                },
              },
            },
          },
          result: {
            place: 1,
            finishOrder: 1,
            kmTime: {
              minutes: 1,
              seconds: 10,
              tenths: 2,
            },
            galloped: true,
            prizeMoney: 220000,
            finalOdds: 2.13,
            startNumber: 5,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 213,
              finalOdds: 213,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 123,
              maxOdds: 123,
              odds: 123,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 3807,
            },
          },
          videos: [
            {
              mediaId: "1395446341491",
              timestamp: "2023-05-27T13:08:58",
            },
            {
              mediaId: "1395457605101",
              timestamp: "2023-05-27T14:10:11",
            },
            {
              mediaId: "1395460165104",
              timestamp: "2023-05-27T14:00:23",
            },
          ],
        },
        {
          number: 6,
          postPosition: 6,
          distance: 1640,
          horse: {
            id: 745675,
            name: "Call Me Brodda",
            age: 8,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 10,
                tenths: 5,
              },
            },
            trainer: {
              id: 565887,
              firstName: "Thomas",
              lastName: "Madsen",
              shortName: "Mad Th",
              location: "Kalmar",
              birth: 1976,
              homeTrack: {
                id: 19,
                name: "Kalmar",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, mgrå/vita hängsl. och ärmrev; sva",
              statistics: {
                years: {
                  "2022": {
                    starts: 120,
                    earnings: 102027300,
                    placement: {
                      "1": 13,
                      "2": 14,
                      "3": 10,
                    },
                    winPercentage: 1083,
                  },
                  "2023": {
                    starts: 66,
                    earnings: 81799800,
                    placement: {
                      "1": 9,
                      "2": 6,
                      "3": 8,
                    },
                    winPercentage: 1363,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
              },
              back: {
                hasShoe: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 1755279,
            color: "svartbrun",
            homeTrack: {
              id: 19,
              name: "Kalmar",
            },
            owner: {
              id: 718449,
              name: "SBP i Sverige AB",
              location: "Solna",
            },
            breeder: {
              id: 216039,
              name: "Brodda International HB",
              location: "Lund",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 18,
                  earnings: 23587300,
                  placement: {
                    "1": 2,
                    "2": 2,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 9,
                      },
                      place: 4,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 9,
                      },
                      place: 0,
                    },
                  ],
                },
                "2023": {
                  starts: 8,
                  earnings: 34065000,
                  placement: {
                    "1": 2,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 8,
                      },
                      place: 8,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 8,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 97,
                earnings: 175527900,
                placement: {
                  "1": 11,
                  "2": 11,
                  "3": 13,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 5,
                    },
                    place: 3,
                    year: "2021",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 9,
                    },
                    place: 1,
                    year: "2021",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 1,
                    year: "2018",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2021",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 8,
                    },
                    place: 0,
                    year: "2019",
                  },
                ],
                winPercentage: 1134,
                placePercentage: 3608,
                earningsPerStart: 1809565,
                startPoints: 2656,
              },
              lastFiveStarts: {
                averageOdds: 1385,
              },
            },
            pedigree: {
              father: {
                id: 588796,
                name: "Maharajah",
              },
              mother: {
                id: 716653,
                name: "Celebrity Venus",
                nationality: "US",
              },
              grandfather: {
                id: 501081,
                name: "Angus Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 145716,
            firstName: "Stefan",
            lastName: "Persson",
            shortName: "Per St",
            location: "Halmstad",
            birth: 1973,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, ljusblå sidor; svart",
            statistics: {
              years: {
                "2022": {
                  starts: 1283,
                  earnings: 1884680900,
                  placement: {
                    "1": 179,
                    "2": 160,
                    "3": 148,
                  },
                  winPercentage: 1395,
                },
                "2023": {
                  starts: 613,
                  earnings: 822739500,
                  placement: {
                    "1": 82,
                    "2": 67,
                    "3": 76,
                  },
                  winPercentage: 1337,
                },
              },
            },
          },
          result: {
            place: 8,
            finishOrder: 8,
            kmTime: {
              minutes: 1,
              seconds: 11,
              tenths: 6,
            },
            prizeMoney: 6000,
            finalOdds: 70.3,
            startNumber: 6,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 7030,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 777,
              maxOdds: 777,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 70,
            },
          },
          videos: [
            {
              mediaId: "1395451461387",
              timestamp: "2023-05-27T13:32:28",
            },
            {
              mediaId: "1395451973313",
              timestamp: "2023-05-27T13:52:27",
            },
            {
              mediaId: "1395455557309",
              timestamp: "2023-05-27T13:42:34",
            },
          ],
        },
        {
          number: 7,
          scratched: true,
          postPosition: 7,
          distance: 1640,
          horse: {
            id: 787557,
            name: "Heliade du Goutier",
            nationality: "FR",
            age: 6,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 10,
                tenths: 1,
              },
            },
            trainer: {
              id: 641720,
              firstName: "Sébastien",
              lastName: "Guarato",
              shortName: "Gua Sé",
              location: "Frankrike",
              license: "A-tränare (utland): träna, köra",
              silks: "Vit, vit; vit",
            },
            shoes: {
              reported: false,
            },
            sulky: {
              reported: false,
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 4526680,
            color: "mörkbrun",
            owner: {
              id: 226006,
              name: "Ecurie Saint Martin",
              location: "Frankrike",
            },
            breeder: {
              id: 581383,
              name: "S.C.E.A. des Bissons",
              location: "Frankrike",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 10,
                  earnings: 138398100,
                  placement: {
                    "1": 2,
                    "2": 3,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 1,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 1,
                      },
                      place: 0,
                    },
                  ],
                },
                "2023": {
                  starts: 4,
                  earnings: 12696200,
                  placement: {
                    "1": 0,
                    "2": 0,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 7,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 38,
                earnings: 452668000,
                placement: {
                  "1": 10,
                  "2": 7,
                  "3": 2,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 1,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 1,
                    },
                    place: 0,
                    year: "2022",
                  },
                ],
                winPercentage: 2631,
                placePercentage: 5000,
                earningsPerStart: 11912315,
                startPoints: 3544,
              },
              lastFiveStarts: {
                averageOdds: 1866,
              },
            },
            pedigree: {
              father: {
                id: 670752,
                name: "Prodigious",
                nationality: "FR",
              },
              mother: {
                id: 787556,
                name: "Voltige du Goutier",
                nationality: "FR",
              },
              grandfather: {
                id: 628893,
                name: "Onyx du Goutier",
                nationality: "FR",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 721503,
            firstName: "Gabriele",
            lastName: "Gelormini",
            shortName: "Gel Ga",
            location: "Frankrike",
            birth: 1991,
            license: "A-tränare (utland): träna, köra",
            silks: "Blå, vit stjärna; röd",
          },
          result: {
            finishOrder: 57,
            finalOdds: 0,
            startNumber: 7,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 0,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 0,
              maxOdds: 0,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 9,
            },
          },
        },
        {
          number: 8,
          scratched: true,
          postPosition: 8,
          distance: 1640,
          horse: {
            id: 730663,
            name: "Dear Friend",
            age: 10,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 10,
                tenths: 4,
              },
            },
            trainer: {
              id: 687805,
              firstName: "Amanda",
              lastName: "Höynä",
              shortName: "Höy Am",
              location: "Molkom",
              birth: 1993,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "B-tränare: träna, köra för bolag",
              statistics: {
                years: {
                  "2022": {
                    starts: 0,
                    earnings: 0,
                    placement: {
                      "1": 0,
                      "2": 0,
                      "3": 0,
                    },
                    winPercentage: 0,
                  },
                  "2023": {
                    starts: 8,
                    earnings: 28300000,
                    placement: {
                      "1": 2,
                      "2": 0,
                      "3": 0,
                    },
                    winPercentage: 2500,
                  },
                },
              },
            },
            shoes: {
              reported: false,
            },
            sulky: {
              reported: false,
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 6568196,
            color: "svart",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 824051,
              name: "Fantini Mauro",
              location: "ChunramJ & Stall MaryAB",
            },
            breeder: {
              id: 200175,
              name: "Nyberg Bengt-Åke",
              location: "Grästorp",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 16,
                  earnings: 109336500,
                  placement: {
                    "1": 4,
                    "2": 2,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 9,
                      },
                      place: 0,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 5,
                      },
                      place: 6,
                    },
                  ],
                },
                "2023": {
                  starts: 8,
                  earnings: 60165800,
                  placement: {
                    "1": 1,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 5,
                      },
                      place: 2,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 1,
                      },
                      place: 5,
                    },
                  ],
                },
              },
              life: {
                starts: 94,
                earnings: 656819600,
                placement: {
                  "1": 27,
                  "2": 15,
                  "3": 8,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 4,
                    },
                    place: 5,
                    year: "2020",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 5,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 2,
                    },
                    place: 1,
                    year: "2020",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 1,
                    },
                    place: 1,
                    year: "2018",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 2,
                    },
                    place: 1,
                    year: "2020",
                  },
                ],
                winPercentage: 2872,
                placePercentage: 5319,
                earningsPerStart: 6987442,
                startPoints: 3531,
              },
              lastFiveStarts: {
                averageOdds: 965,
              },
            },
            pedigree: {
              father: {
                id: 617124,
                name: "Orlando Vici",
                nationality: "FR",
              },
              mother: {
                id: 611292,
                name: "Juventas Broline",
              },
              grandfather: {
                id: 130525,
                name: "Pine Chip",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 161607,
            firstName: "Björn",
            lastName: "Goop",
            shortName: "Goo Bj",
            location: "Karlstad",
            birth: 1976,
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            license: "A-tränare: (Sv/utland): träna, köra",
            silks: "Mblå, guldf.midjeband, sömmar; guld",
            statistics: {
              years: {
                "2022": {
                  starts: 1260,
                  earnings: 4030146900,
                  placement: {
                    "1": 194,
                    "2": 167,
                    "3": 139,
                  },
                  winPercentage: 1539,
                },
                "2023": {
                  starts: 388,
                  earnings: 1036036000,
                  placement: {
                    "1": 59,
                    "2": 50,
                    "3": 36,
                  },
                  winPercentage: 1520,
                },
              },
            },
          },
          result: {
            finishOrder: 58,
            finalOdds: 0,
            startNumber: 8,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 0,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 0,
              maxOdds: 0,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 2,
            },
          },
        },
        {
          number: 9,
          postPosition: 9,
          distance: 1640,
          horse: {
            id: 797548,
            name: "Riet Hazelaar",
            nationality: "DE",
            age: 5,
            sex: "mare",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 12,
                tenths: 2,
              },
            },
            trainer: {
              id: 181835,
              firstName: "Dion",
              lastName: "Tesselaar",
              shortName: "Tes Di",
              location: "Nederländerna",
              birth: 1969,
              license: "A-tränare (utland): träna, köra",
              silks: "Röd, röd; röd",
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
              },
              back: {
                hasShoe: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 1326690,
            color: "brunskimmel",
            owner: {
              id: 226007,
              name: "Carpe Diem Stables",
              location: "Tyskland",
            },
            breeder: {
              id: 779937,
              name: "Stassen Michel P G",
              location: "Nederländerna",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 5,
                  earnings: 82606800,
                  placement: {
                    "1": 3,
                    "2": 0,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 8,
                      },
                      place: 4,
                    },
                  ],
                },
                "2023": {
                  starts: 1,
                  earnings: 4761300,
                  placement: {
                    "1": 0,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 2,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 12,
                earnings: 132669000,
                placement: {
                  "1": 4,
                  "2": 3,
                  "3": 1,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 2,
                    },
                    place: 2,
                    year: "2023",
                  },
                ],
                winPercentage: 3333,
                placePercentage: 6666,
                earningsPerStart: 11055750,
                startPoints: 9210,
              },
              lastFiveStarts: {
                averageOdds: 438,
              },
            },
            pedigree: {
              father: {
                id: 553396,
                name: "S.J.'s Caviar",
                nationality: "US",
              },
              mother: {
                id: 763899,
                name: "Jagga de Bellouet",
                nationality: "DE",
              },
              grandfather: {
                id: 567174,
                name: "Jag de Bellouet",
                nationality: "FR",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 783516,
            firstName: "Dexter",
            lastName: "Dunn",
            shortName: "Dun De",
            location: "Usa",
            birth: 1989,
            license: "A-tränare (utland): träna, köra",
            silks: "Svart, röda hängslen,axelp. och ärm; vit",
          },
          result: {
            place: 2,
            finishOrder: 2,
            kmTime: {
              minutes: 1,
              seconds: 10,
              tenths: 8,
            },
            galloped: true,
            prizeMoney: 110000,
            finalOdds: 14.62,
            startNumber: 9,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1462,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 251,
              maxOdds: 251,
              odds: 251,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 397,
            },
          },
          videos: [
            {
              mediaId: "1395447365344",
              timestamp: "2023-05-27T13:12:08",
            },
            {
              mediaId: "1395449413096",
              timestamp: "2023-05-27T13:02:19",
            },
            {
              mediaId: "1395456581455",
              timestamp: "2023-05-27T14:14:50",
            },
            {
              mediaId: "1395457093399",
              timestamp: "2023-05-27T14:04:31",
            },
          ],
        },
        {
          number: 10,
          postPosition: 10,
          distance: 1640,
          horse: {
            id: 782148,
            name: "Sister Sledge",
            nationality: "US",
            age: 6,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 9,
                tenths: 1,
              },
            },
            trainer: {
              id: 185518,
              firstName: "Daniel",
              lastName: "Redén",
              shortName: "Red Da",
              location: "Örsundsbro",
              birth: 1979,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: träna, köra",
              silks: "Brun, sv axelp och vita hängsl; svart",
              statistics: {
                years: {
                  "2022": {
                    starts: 514,
                    earnings: 4567579900,
                    placement: {
                      "1": 157,
                      "2": 90,
                      "3": 62,
                    },
                    winPercentage: 3054,
                  },
                  "2023": {
                    starts: 89,
                    earnings: 514009300,
                    placement: {
                      "1": 29,
                      "2": 14,
                      "3": 11,
                    },
                    winPercentage: 3258,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 9517453,
            color: "stickelhårig svartbrun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 189279,
              name: "Stall Zet (Redén Daniel)",
            },
            breeder: {
              id: 806306,
              name: "Sergent Stables LLC & Andray Farm",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 4,
                  earnings: 42500000,
                  placement: {
                    "1": 2,
                    "2": 2,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 4,
                      },
                      place: 2,
                    },
                  ],
                },
                "2023": {
                  starts: 2,
                  earnings: 15000000,
                  placement: {
                    "1": 2,
                    "2": 0,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 0,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 39,
                earnings: 951745300,
                placement: {
                  "1": 22,
                  "2": 8,
                  "3": 1,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 9,
                      tenths: 1,
                    },
                    place: 1,
                    year: "2021",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 2,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "aaK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 9,
                      tenths: 2,
                    },
                    place: 1,
                    year: "2020",
                  },
                ],
                winPercentage: 5641,
                placePercentage: 7948,
                earningsPerStart: 24403725,
                startPoints: 5950,
              },
              lastFiveStarts: {
                averageOdds: 177,
              },
            },
            pedigree: {
              father: {
                id: 748142,
                name: "Father Patrick",
                nationality: "US",
              },
              mother: {
                id: 782147,
                name: "Behindclosedoors",
                nationality: "CA",
              },
              grandfather: {
                id: 568973,
                name: "Andover Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 67192,
            firstName: "Örjan",
            lastName: "Kihlström",
            shortName: "Kih Ör",
            location: "Bromma",
            birth: 1962,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Turkos, vitt axelparti, 2-del ärm; vit",
            statistics: {
              years: {
                "2022": {
                  starts: 1124,
                  earnings: 5732761800,
                  placement: {
                    "1": 235,
                    "2": 148,
                    "3": 135,
                  },
                  winPercentage: 2090,
                },
                "2023": {
                  starts: 312,
                  earnings: 1001431700,
                  placement: {
                    "1": 61,
                    "2": 33,
                    "3": 30,
                  },
                  winPercentage: 1955,
                },
              },
            },
          },
          result: {
            place: 6,
            finishOrder: 6,
            kmTime: {
              minutes: 1,
              seconds: 10,
              tenths: 9,
            },
            prizeMoney: 15000,
            finalOdds: 4.13,
            startNumber: 10,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 413,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 136,
              maxOdds: 136,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 2294,
            },
          },
          videos: [
            {
              mediaId: "1395450949333",
              timestamp: "2023-05-27T13:29:41",
            },
            {
              mediaId: "1395453509249",
              timestamp: "2023-05-27T13:40:33",
            },
            {
              mediaId: "1395453509398",
              timestamp: "2023-05-27T13:50:48",
            },
          ],
        },
      ],
      starts: [
        {
          number: 1,
          postPosition: 1,
          distance: 1640,
          horse: {
            id: 767802,
            name: "Filippa B.J.",
            age: 5,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 11,
                tenths: 3,
              },
            },
            trainer: {
              id: 641811,
              firstName: "Sybille",
              lastName: "Tinter",
              shortName: "Tin Sy",
              location: "Sala",
              birth: 1982,
              homeTrack: {
                id: 23,
                name: "Romme",
              },
              license: "A-tränare: träna, köra",
              silks: "Grön, gula hängslen och ärmbindel; grön",
              statistics: {
                years: {
                  "2022": {
                    starts: 240,
                    earnings: 283430000,
                    placement: {
                      "1": 38,
                      "2": 38,
                      "3": 22,
                    },
                    winPercentage: 1583,
                  },
                  "2023": {
                    starts: 76,
                    earnings: 103500000,
                    placement: {
                      "1": 13,
                      "2": 13,
                      "3": 8,
                    },
                    winPercentage: 1710,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 1093734,
            color: "brun",
            homeTrack: {
              id: 23,
              name: "Romme",
            },
            owner: {
              id: 814774,
              name: "Pohlmann Gabriele",
              location: "Tyskland",
            },
            breeder: {
              id: 563847,
              name: "Johansson Maud",
              location: "Östhammar",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 14,
                  earnings: 73100000,
                  placement: {
                    "1": 3,
                    "2": 4,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 8,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 3,
                      },
                      place: 0,
                    },
                  ],
                },
                "2023": {
                  starts: 3,
                  earnings: 12500000,
                  placement: {
                    "1": 2,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 3,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 28,
                earnings: 109373400,
                placement: {
                  "1": 10,
                  "2": 8,
                  "3": 1,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 3,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 8,
                    },
                    place: 0,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 3,
                    },
                    place: 0,
                    year: "2022",
                  },
                ],
                winPercentage: 3571,
                placePercentage: 6785,
                earningsPerStart: 3906192,
                startPoints: 2940,
              },
              lastFiveStarts: {
                averageOdds: 428,
              },
            },
            pedigree: {
              father: {
                id: 679657,
                name: "Muscle Mass",
                nationality: "US",
              },
              mother: {
                id: 607858,
                name: "Gloire d'Inverne",
              },
              grandfather: {
                id: 565421,
                name: "Sugar Trader",
                nationality: "US",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 70381,
            firstName: "Jorma",
            lastName: "Kontio",
            shortName: "Kon Jo",
            location: "Enköping",
            birth: 1953,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Blå, vit bröstband och blå ärmar; vit",
            statistics: {
              years: {
                "2022": {
                  starts: 1314,
                  earnings: 1810214700,
                  placement: {
                    "1": 198,
                    "2": 115,
                    "3": 135,
                  },
                  winPercentage: 1506,
                },
                "2023": {
                  starts: 422,
                  earnings: 566544200,
                  placement: {
                    "1": 48,
                    "2": 45,
                    "3": 34,
                  },
                  winPercentage: 1137,
                },
              },
            },
          },
          result: {
            place: 3,
            finishOrder: 3,
            kmTime: {
              minutes: 1,
              seconds: 10,
              tenths: 8,
            },
            prizeMoney: 62000,
            finalOdds: 22.27,
            startNumber: 1,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 2227,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 318,
              maxOdds: 318,
              odds: 318,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 379,
            },
          },
          videos: [
            {
              mediaId: "1395450437418",
              timestamp: "2023-05-27T13:34:54",
            },
            {
              mediaId: "1395451973208",
              timestamp: "2023-05-27T13:44:49",
            },
            {
              mediaId: "1395454533483",
              timestamp: "2023-05-27T13:54:54",
            },
          ],
        },
        {
          number: 2,
          postPosition: 2,
          distance: 1640,
          horse: {
            id: 745251,
            name: "Racing Brodda",
            age: 8,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 10,
                tenths: 5,
              },
            },
            trainer: {
              id: 593763,
              firstName: "Mattias",
              lastName: "Djuse",
              shortName: "Dju Ma",
              location: "Ekolsund",
              birth: 1989,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, grå sidor; svart",
              statistics: {
                years: {
                  "2022": {
                    starts: 658,
                    earnings: 1516728900,
                    placement: {
                      "1": 122,
                      "2": 100,
                      "3": 87,
                    },
                    winPercentage: 1854,
                  },
                  "2023": {
                    starts: 277,
                    earnings: 721105000,
                    placement: {
                      "1": 48,
                      "2": 33,
                      "3": 40,
                    },
                    winPercentage: 1732,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 7644250,
            color: "mörkbrun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 134918,
              name: "Easy KB",
              location: "Uppsala",
            },
            breeder: {
              id: 230444,
              name: "Brodda Stuteri AB",
              location: "Skurup",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 11,
                  earnings: 55000000,
                  placement: {
                    "1": 3,
                    "2": 2,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 0,
                      },
                      place: 2,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 5,
                      },
                      place: 1,
                    },
                  ],
                },
                "2023": {
                  starts: 6,
                  earnings: 29050000,
                  placement: {
                    "1": 1,
                    "2": 0,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 2,
                      },
                      place: 3,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 3,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 74,
                earnings: 764425000,
                placement: {
                  "1": 16,
                  "2": 15,
                  "3": 13,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 5,
                    },
                    place: 3,
                    year: "2021",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 4,
                    },
                    place: 4,
                    year: "2020",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 5,
                    },
                    place: 5,
                    year: "2021",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 5,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 5,
                    },
                    place: 2,
                    year: "2021",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 9,
                    },
                    place: 2,
                    year: "2020",
                  },
                ],
                winPercentage: 2162,
                placePercentage: 5945,
                earningsPerStart: 10330067,
                startPoints: 3220,
              },
              lastFiveStarts: {
                averageOdds: 813,
              },
            },
            pedigree: {
              father: {
                id: 670752,
                name: "Prodigious",
                nationality: "FR",
              },
              mother: {
                id: 574795,
                name: "Ronda Brick",
              },
              grandfather: {
                id: 161030,
                name: "Super Arnie",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 740606,
            firstName: "Magnus A",
            lastName: "Djuse",
            shortName: "Dju MA",
            location: "Örsundsbro",
            birth: 2000,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Svart, blå hängslen och vitt lo fält; vit",
            statistics: {
              years: {
                "2022": {
                  starts: 1399,
                  earnings: 3241116300,
                  placement: {
                    "1": 255,
                    "2": 187,
                    "3": 154,
                  },
                  winPercentage: 1822,
                },
                "2023": {
                  starts: 509,
                  earnings: 1255379000,
                  placement: {
                    "1": 81,
                    "2": 66,
                    "3": 70,
                  },
                  winPercentage: 1591,
                },
              },
            },
          },
          result: {
            place: 5,
            finishOrder: 5,
            kmTime: {
              minutes: 1,
              seconds: 10,
              tenths: 9,
            },
            prizeMoney: 22000,
            finalOdds: 28.38,
            startNumber: 2,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 2838,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 358,
              maxOdds: 358,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 253,
            },
          },
          videos: [
            {
              mediaId: "1395460165258",
              timestamp: "2023-05-27T14:06:23",
            },
            {
              mediaId: "1395464261033",
              timestamp: "2023-05-27T14:35:18",
            },
          ],
        },
        {
          number: 3,
          postPosition: 3,
          distance: 1640,
          horse: {
            id: 765670,
            name: "Imhatra Am",
            age: 5,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 9,
                tenths: 7,
              },
            },
            trainer: {
              id: 92281,
              firstName: "Jörgen",
              lastName: "Westholm",
              shortName: "Wes Jö",
              location: "Sala",
              birth: 1972,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, vitt bröstb, gröna ärmar; grön",
              statistics: {
                years: {
                  "2022": {
                    starts: 1038,
                    earnings: 2187137100,
                    placement: {
                      "1": 152,
                      "2": 130,
                      "3": 121,
                    },
                    winPercentage: 1464,
                  },
                  "2023": {
                    starts: 306,
                    earnings: 636645900,
                    placement: {
                      "1": 57,
                      "2": 37,
                      "3": 31,
                    },
                    winPercentage: 1862,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 4099258,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 708061,
              name: "Stall Courant AB",
              location: "Heby",
            },
            breeder: {
              id: 686741,
              name: "Am Bloodstock AB",
              location: "Stockholm",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 17,
                  earnings: 218532500,
                  placement: {
                    "1": 5,
                    "2": 5,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 2,
                      },
                      place: 2,
                    },
                  ],
                },
                "2023": {
                  starts: 5,
                  earnings: 51200900,
                  placement: {
                    "1": 1,
                    "2": 0,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 9,
                        tenths: 7,
                      },
                      place: 3,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 3,
                      },
                      place: 6,
                    },
                  ],
                },
              },
              life: {
                starts: 40,
                earnings: 409925800,
                placement: {
                  "1": 11,
                  "2": 9,
                  "3": 3,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 9,
                      tenths: 7,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 6,
                    },
                    place: 2,
                    year: "2022",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 4,
                    },
                    place: 0,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 3,
                    },
                    place: 6,
                    year: "2023",
                  },
                  {
                    code: "aaK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 9,
                      tenths: 9,
                    },
                    place: 6,
                    year: "2021",
                  },
                ],
                winPercentage: 2750,
                placePercentage: 5750,
                earningsPerStart: 10248145,
                startPoints: 5569,
              },
              lastFiveStarts: {
                averageOdds: 3156,
              },
            },
            pedigree: {
              father: {
                id: 685124,
                name: "Muscle Hill",
                nationality: "US",
              },
              mother: {
                id: 634740,
                name: "Tamla Celeber",
              },
              grandfather: {
                id: 603016,
                name: "Cantab Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 722626,
            firstName: "Mats E",
            lastName: "Djuse",
            shortName: "Dju ME",
            location: "Hudiksvall",
            birth: 1998,
            homeTrack: {
              id: 17,
              name: "Hagmyren",
            },
            license: "Körlicens kategori 1: köra",
            silks: "Röd, gul hästsko; röd",
            statistics: {
              years: {
                "2022": {
                  starts: 1665,
                  earnings: 2510218300,
                  placement: {
                    "1": 210,
                    "2": 187,
                    "3": 169,
                  },
                  winPercentage: 1261,
                },
                "2023": {
                  starts: 612,
                  earnings: 927346300,
                  placement: {
                    "1": 88,
                    "2": 85,
                    "3": 52,
                  },
                  winPercentage: 1437,
                },
              },
            },
          },
          result: {
            place: 4,
            finishOrder: 4,
            kmTime: {
              minutes: 1,
              seconds: 10,
              tenths: 9,
            },
            prizeMoney: 35000,
            finalOdds: 3.48,
            startNumber: 3,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 348,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 137,
              maxOdds: 137,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 2703,
            },
          },
          videos: [
            {
              mediaId: "1395460165135",
              timestamp: "2023-05-27T14:01:18",
            },
            {
              mediaId: "1395460677124",
              timestamp: "2023-05-27T14:11:46",
            },
          ],
        },
        {
          number: 4,
          postPosition: 4,
          distance: 1640,
          horse: {
            id: 789711,
            name: "A Perfect Dutchess",
            nationality: "US",
            age: 5,
            sex: "mare",
            record: {
              code: "aaK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 11,
                tenths: 5,
              },
            },
            trainer: {
              id: 99400,
              firstName: "Frode",
              lastName: "Hamre",
              shortName: "Ham Fr",
              location: "Norge",
              birth: 1964,
              license: "A-tränare (utland): träna, köra",
              silks: "Ljusblå, mörkblå axelparti och ärm; vit",
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
              },
              back: {
                hasShoe: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 800184,
            color: "brun",
            owner: {
              id: 226009,
              name: "Djuve Eirik",
              location: "Norge",
            },
            breeder: {
              id: 728373,
              name: "Detweiler Robert S",
              location: "USA",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 9,
                  earnings: 24611500,
                  placement: {
                    "1": 5,
                    "2": 1,
                    "3": 3,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 0,
                      },
                      place: 1,
                    },
                  ],
                },
                "2023": {
                  starts: 5,
                  earnings: 15191700,
                  placement: {
                    "1": 3,
                    "2": 1,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 4,
                      },
                      place: 1,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 1,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 30,
                earnings: 80018400,
                placement: {
                  "1": 12,
                  "2": 4,
                  "3": 8,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 0,
                    },
                    place: 3,
                    year: "2022",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 1,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "aaK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 5,
                    },
                    place: 3,
                    year: "2020",
                  },
                ],
                winPercentage: 4000,
                placePercentage: 8000,
                earningsPerStart: 2667280,
                startPoints: 2667,
              },
              lastFiveStarts: {
                averageOdds: 284,
              },
            },
            pedigree: {
              father: {
                id: 685124,
                name: "Muscle Hill",
                nationality: "US",
              },
              mother: {
                id: 725293,
                name: "Asixpakfromperfect",
                nationality: "US",
              },
              grandfather: {
                id: 579264,
                name: "Windsong's Legacy",
                nationality: "US",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 722458,
            firstName: "Magnus Teien",
            lastName: "Gundersen",
            shortName: "Gun MT",
            location: "Norge",
            birth: 1996,
            license: "Körlicens, utländsk",
            silks: "Mörkblå, vit/röd sömmar; mblå",
          },
          result: {
            place: 7,
            finishOrder: 7,
            kmTime: {
              minutes: 1,
              seconds: 11,
              tenths: 4,
            },
            prizeMoney: 10000,
            finalOdds: 56.05,
            startNumber: 4,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 5605,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 657,
              maxOdds: 657,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 87,
            },
          },
          videos: [
            {
              mediaId: "1395456581411",
              timestamp: "2023-05-27T14:13:31",
            },
            {
              mediaId: "1395457093359",
              timestamp: "2023-05-27T14:02:53",
            },
          ],
        },
        {
          number: 5,
          postPosition: 5,
          distance: 1640,
          horse: {
            id: 790541,
            name: "Zeudi Amg",
            nationality: "IT",
            age: 8,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 9,
                tenths: 9,
              },
            },
            trainer: {
              id: 594966,
              firstName: "Alessandro",
              lastName: "Gocciadoro",
              shortName: "Goc Al",
              location: "Italien",
              birth: 1975,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: (Sv/utland): träna, köra",
              silks: "Gul, röd; röd",
              statistics: {
                years: {
                  "2022": {
                    starts: 193,
                    earnings: 786391900,
                    placement: {
                      "1": 36,
                      "2": 21,
                      "3": 12,
                    },
                    winPercentage: 1865,
                  },
                  "2023": {
                    starts: 37,
                    earnings: 233620500,
                    placement: {
                      "1": 10,
                      "2": 6,
                      "3": 5,
                    },
                    winPercentage: 2702,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
              },
              back: {
                hasShoe: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 2515391,
            color: "brun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 821270,
              name: "Rondena Aldo",
              location: "Italien",
            },
            breeder: {
              id: 821228,
              name: "Pozzobon Gianfranco",
              location: "Italien",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 10,
                  earnings: 134947800,
                  placement: {
                    "1": 3,
                    "2": 2,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 9,
                        tenths: 9,
                      },
                      place: 2,
                    },
                  ],
                },
                "2023": {
                  starts: 3,
                  earnings: 7595000,
                  placement: {
                    "1": 0,
                    "2": 0,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 6,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 57,
                earnings: 251539100,
                placement: {
                  "1": 25,
                  "2": 8,
                  "3": 5,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 9,
                      tenths: 9,
                    },
                    place: 2,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 6,
                    },
                    place: 5,
                    year: "2023",
                  },
                ],
                winPercentage: 4385,
                placePercentage: 6666,
                earningsPerStart: 4412966,
                startPoints: 5637,
              },
              lastFiveStarts: {
                averageOdds: 1739,
              },
            },
            pedigree: {
              father: {
                id: 755928,
                name: "Ideale Luis",
                nationality: "IT",
              },
              mother: {
                id: 790540,
                name: "Ironica Spin",
                nationality: "IT",
              },
              grandfather: {
                id: 197809,
                name: "Ganymede",
                nationality: "FR",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 594966,
            firstName: "Alessandro",
            lastName: "Gocciadoro",
            shortName: "Goc Al",
            location: "Italien",
            birth: 1975,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: (Sv/utland): träna, köra",
            silks: "Gul, röd; röd",
            statistics: {
              years: {
                "2022": {
                  starts: 100,
                  earnings: 450983500,
                  placement: {
                    "1": 21,
                    "2": 13,
                    "3": 6,
                  },
                  winPercentage: 2100,
                },
                "2023": {
                  starts: 27,
                  earnings: 211987200,
                  placement: {
                    "1": 8,
                    "2": 5,
                    "3": 4,
                  },
                  winPercentage: 2962,
                },
              },
            },
          },
          result: {
            place: 1,
            finishOrder: 1,
            kmTime: {
              minutes: 1,
              seconds: 10,
              tenths: 2,
            },
            galloped: true,
            prizeMoney: 220000,
            finalOdds: 2.13,
            startNumber: 5,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 213,
              finalOdds: 213,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 123,
              maxOdds: 123,
              odds: 123,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 3807,
            },
          },
          videos: [
            {
              mediaId: "1395446341491",
              timestamp: "2023-05-27T13:08:58",
            },
            {
              mediaId: "1395457605101",
              timestamp: "2023-05-27T14:10:11",
            },
            {
              mediaId: "1395460165104",
              timestamp: "2023-05-27T14:00:23",
            },
          ],
        },
        {
          number: 6,
          postPosition: 6,
          distance: 1640,
          horse: {
            id: 745675,
            name: "Call Me Brodda",
            age: 8,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 10,
                tenths: 5,
              },
            },
            trainer: {
              id: 565887,
              firstName: "Thomas",
              lastName: "Madsen",
              shortName: "Mad Th",
              location: "Kalmar",
              birth: 1976,
              homeTrack: {
                id: 19,
                name: "Kalmar",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, mgrå/vita hängsl. och ärmrev; sva",
              statistics: {
                years: {
                  "2022": {
                    starts: 120,
                    earnings: 102027300,
                    placement: {
                      "1": 13,
                      "2": 14,
                      "3": 10,
                    },
                    winPercentage: 1083,
                  },
                  "2023": {
                    starts: 66,
                    earnings: 81799800,
                    placement: {
                      "1": 9,
                      "2": 6,
                      "3": 8,
                    },
                    winPercentage: 1363,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
              },
              back: {
                hasShoe: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 1755279,
            color: "svartbrun",
            homeTrack: {
              id: 19,
              name: "Kalmar",
            },
            owner: {
              id: 718449,
              name: "SBP i Sverige AB",
              location: "Solna",
            },
            breeder: {
              id: 216039,
              name: "Brodda International HB",
              location: "Lund",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 18,
                  earnings: 23587300,
                  placement: {
                    "1": 2,
                    "2": 2,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 9,
                      },
                      place: 4,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 9,
                      },
                      place: 0,
                    },
                  ],
                },
                "2023": {
                  starts: 8,
                  earnings: 34065000,
                  placement: {
                    "1": 2,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 8,
                      },
                      place: 8,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 8,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 97,
                earnings: 175527900,
                placement: {
                  "1": 11,
                  "2": 11,
                  "3": 13,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 5,
                    },
                    place: 3,
                    year: "2021",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 9,
                    },
                    place: 1,
                    year: "2021",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 1,
                    year: "2018",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2021",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 8,
                    },
                    place: 0,
                    year: "2019",
                  },
                ],
                winPercentage: 1134,
                placePercentage: 3608,
                earningsPerStart: 1809565,
                startPoints: 2656,
              },
              lastFiveStarts: {
                averageOdds: 1385,
              },
            },
            pedigree: {
              father: {
                id: 588796,
                name: "Maharajah",
              },
              mother: {
                id: 716653,
                name: "Celebrity Venus",
                nationality: "US",
              },
              grandfather: {
                id: 501081,
                name: "Angus Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 145716,
            firstName: "Stefan",
            lastName: "Persson",
            shortName: "Per St",
            location: "Halmstad",
            birth: 1973,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, ljusblå sidor; svart",
            statistics: {
              years: {
                "2022": {
                  starts: 1283,
                  earnings: 1884680900,
                  placement: {
                    "1": 179,
                    "2": 160,
                    "3": 148,
                  },
                  winPercentage: 1395,
                },
                "2023": {
                  starts: 613,
                  earnings: 822739500,
                  placement: {
                    "1": 82,
                    "2": 67,
                    "3": 76,
                  },
                  winPercentage: 1337,
                },
              },
            },
          },
          result: {
            place: 8,
            finishOrder: 8,
            kmTime: {
              minutes: 1,
              seconds: 11,
              tenths: 6,
            },
            prizeMoney: 6000,
            finalOdds: 70.3,
            startNumber: 6,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 7030,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 777,
              maxOdds: 777,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 70,
            },
          },
          videos: [
            {
              mediaId: "1395451461387",
              timestamp: "2023-05-27T13:32:28",
            },
            {
              mediaId: "1395451973313",
              timestamp: "2023-05-27T13:52:27",
            },
            {
              mediaId: "1395455557309",
              timestamp: "2023-05-27T13:42:34",
            },
          ],
        },
        {
          number: 7,
          scratched: true,
          postPosition: 7,
          distance: 1640,
          horse: {
            id: 787557,
            name: "Heliade du Goutier",
            nationality: "FR",
            age: 6,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 10,
                tenths: 1,
              },
            },
            trainer: {
              id: 641720,
              firstName: "Sébastien",
              lastName: "Guarato",
              shortName: "Gua Sé",
              location: "Frankrike",
              license: "A-tränare (utland): träna, köra",
              silks: "Vit, vit; vit",
            },
            shoes: {
              reported: false,
            },
            sulky: {
              reported: false,
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 4526680,
            color: "mörkbrun",
            owner: {
              id: 226006,
              name: "Ecurie Saint Martin",
              location: "Frankrike",
            },
            breeder: {
              id: 581383,
              name: "S.C.E.A. des Bissons",
              location: "Frankrike",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 10,
                  earnings: 138398100,
                  placement: {
                    "1": 2,
                    "2": 3,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 1,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 1,
                      },
                      place: 0,
                    },
                  ],
                },
                "2023": {
                  starts: 4,
                  earnings: 12696200,
                  placement: {
                    "1": 0,
                    "2": 0,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 7,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 38,
                earnings: 452668000,
                placement: {
                  "1": 10,
                  "2": 7,
                  "3": 2,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 1,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 1,
                    },
                    place: 0,
                    year: "2022",
                  },
                ],
                winPercentage: 2631,
                placePercentage: 5000,
                earningsPerStart: 11912315,
                startPoints: 3544,
              },
              lastFiveStarts: {
                averageOdds: 1866,
              },
            },
            pedigree: {
              father: {
                id: 670752,
                name: "Prodigious",
                nationality: "FR",
              },
              mother: {
                id: 787556,
                name: "Voltige du Goutier",
                nationality: "FR",
              },
              grandfather: {
                id: 628893,
                name: "Onyx du Goutier",
                nationality: "FR",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 721503,
            firstName: "Gabriele",
            lastName: "Gelormini",
            shortName: "Gel Ga",
            location: "Frankrike",
            birth: 1991,
            license: "A-tränare (utland): träna, köra",
            silks: "Blå, vit stjärna; röd",
          },
          result: {
            finishOrder: 57,
            finalOdds: 0,
            startNumber: 7,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 0,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 0,
              maxOdds: 0,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 9,
            },
          },
        },
        {
          number: 8,
          scratched: true,
          postPosition: 8,
          distance: 1640,
          horse: {
            id: 730663,
            name: "Dear Friend",
            age: 10,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 10,
                tenths: 4,
              },
            },
            trainer: {
              id: 687805,
              firstName: "Amanda",
              lastName: "Höynä",
              shortName: "Höy Am",
              location: "Molkom",
              birth: 1993,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "B-tränare: träna, köra för bolag",
              statistics: {
                years: {
                  "2022": {
                    starts: 0,
                    earnings: 0,
                    placement: {
                      "1": 0,
                      "2": 0,
                      "3": 0,
                    },
                    winPercentage: 0,
                  },
                  "2023": {
                    starts: 8,
                    earnings: 28300000,
                    placement: {
                      "1": 2,
                      "2": 0,
                      "3": 0,
                    },
                    winPercentage: 2500,
                  },
                },
              },
            },
            shoes: {
              reported: false,
            },
            sulky: {
              reported: false,
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 6568196,
            color: "svart",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 824051,
              name: "Fantini Mauro",
              location: "ChunramJ & Stall MaryAB",
            },
            breeder: {
              id: 200175,
              name: "Nyberg Bengt-Åke",
              location: "Grästorp",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 16,
                  earnings: 109336500,
                  placement: {
                    "1": 4,
                    "2": 2,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 9,
                      },
                      place: 0,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 5,
                      },
                      place: 6,
                    },
                  ],
                },
                "2023": {
                  starts: 8,
                  earnings: 60165800,
                  placement: {
                    "1": 1,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 5,
                      },
                      place: 2,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 1,
                      },
                      place: 5,
                    },
                  ],
                },
              },
              life: {
                starts: 94,
                earnings: 656819600,
                placement: {
                  "1": 27,
                  "2": 15,
                  "3": 8,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 4,
                    },
                    place: 5,
                    year: "2020",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 5,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 2,
                    },
                    place: 1,
                    year: "2020",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 1,
                    },
                    place: 1,
                    year: "2018",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 2,
                    },
                    place: 1,
                    year: "2020",
                  },
                ],
                winPercentage: 2872,
                placePercentage: 5319,
                earningsPerStart: 6987442,
                startPoints: 3531,
              },
              lastFiveStarts: {
                averageOdds: 965,
              },
            },
            pedigree: {
              father: {
                id: 617124,
                name: "Orlando Vici",
                nationality: "FR",
              },
              mother: {
                id: 611292,
                name: "Juventas Broline",
              },
              grandfather: {
                id: 130525,
                name: "Pine Chip",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 161607,
            firstName: "Björn",
            lastName: "Goop",
            shortName: "Goo Bj",
            location: "Karlstad",
            birth: 1976,
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            license: "A-tränare: (Sv/utland): träna, köra",
            silks: "Mblå, guldf.midjeband, sömmar; guld",
            statistics: {
              years: {
                "2022": {
                  starts: 1260,
                  earnings: 4030146900,
                  placement: {
                    "1": 194,
                    "2": 167,
                    "3": 139,
                  },
                  winPercentage: 1539,
                },
                "2023": {
                  starts: 388,
                  earnings: 1036036000,
                  placement: {
                    "1": 59,
                    "2": 50,
                    "3": 36,
                  },
                  winPercentage: 1520,
                },
              },
            },
          },
          result: {
            finishOrder: 58,
            finalOdds: 0,
            startNumber: 8,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 0,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 0,
              maxOdds: 0,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 2,
            },
          },
        },
        {
          number: 9,
          postPosition: 9,
          distance: 1640,
          horse: {
            id: 797548,
            name: "Riet Hazelaar",
            nationality: "DE",
            age: 5,
            sex: "mare",
            record: {
              code: "aM",
              startMethod: "auto",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 12,
                tenths: 2,
              },
            },
            trainer: {
              id: 181835,
              firstName: "Dion",
              lastName: "Tesselaar",
              shortName: "Tes Di",
              location: "Nederländerna",
              birth: 1969,
              license: "A-tränare (utland): träna, köra",
              silks: "Röd, röd; röd",
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
              },
              back: {
                hasShoe: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 1326690,
            color: "brunskimmel",
            owner: {
              id: 226007,
              name: "Carpe Diem Stables",
              location: "Tyskland",
            },
            breeder: {
              id: 779937,
              name: "Stassen Michel P G",
              location: "Nederländerna",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 5,
                  earnings: 82606800,
                  placement: {
                    "1": 3,
                    "2": 0,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 8,
                      },
                      place: 4,
                    },
                  ],
                },
                "2023": {
                  starts: 1,
                  earnings: 4761300,
                  placement: {
                    "1": 0,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 2,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 12,
                earnings: 132669000,
                placement: {
                  "1": 4,
                  "2": 3,
                  "3": 1,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 2,
                    },
                    place: 2,
                    year: "2023",
                  },
                ],
                winPercentage: 3333,
                placePercentage: 6666,
                earningsPerStart: 11055750,
                startPoints: 9210,
              },
              lastFiveStarts: {
                averageOdds: 438,
              },
            },
            pedigree: {
              father: {
                id: 553396,
                name: "S.J.'s Caviar",
                nationality: "US",
              },
              mother: {
                id: 763899,
                name: "Jagga de Bellouet",
                nationality: "DE",
              },
              grandfather: {
                id: 567174,
                name: "Jag de Bellouet",
                nationality: "FR",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 783516,
            firstName: "Dexter",
            lastName: "Dunn",
            shortName: "Dun De",
            location: "Usa",
            birth: 1989,
            license: "A-tränare (utland): träna, köra",
            silks: "Svart, röda hängslen,axelp. och ärm; vit",
          },
          result: {
            place: 2,
            finishOrder: 2,
            kmTime: {
              minutes: 1,
              seconds: 10,
              tenths: 8,
            },
            galloped: true,
            prizeMoney: 110000,
            finalOdds: 14.62,
            startNumber: 9,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1462,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 251,
              maxOdds: 251,
              odds: 251,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 397,
            },
          },
          videos: [
            {
              mediaId: "1395447365344",
              timestamp: "2023-05-27T13:12:08",
            },
            {
              mediaId: "1395449413096",
              timestamp: "2023-05-27T13:02:19",
            },
            {
              mediaId: "1395456581455",
              timestamp: "2023-05-27T14:14:50",
            },
            {
              mediaId: "1395457093399",
              timestamp: "2023-05-27T14:04:31",
            },
          ],
        },
        {
          number: 10,
          postPosition: 10,
          distance: 1640,
          horse: {
            id: 782148,
            name: "Sister Sledge",
            nationality: "US",
            age: 6,
            sex: "mare",
            record: {
              code: "aK",
              startMethod: "auto",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 9,
                tenths: 1,
              },
            },
            trainer: {
              id: 185518,
              firstName: "Daniel",
              lastName: "Redén",
              shortName: "Red Da",
              location: "Örsundsbro",
              birth: 1979,
              homeTrack: {
                id: 5,
                name: "Solvalla",
              },
              license: "A-tränare: träna, köra",
              silks: "Brun, sv axelp och vita hängsl; svart",
              statistics: {
                years: {
                  "2022": {
                    starts: 514,
                    earnings: 4567579900,
                    placement: {
                      "1": 157,
                      "2": 90,
                      "3": 62,
                    },
                    winPercentage: 3054,
                  },
                  "2023": {
                    starts: 89,
                    earnings: 514009300,
                    placement: {
                      "1": 29,
                      "2": 14,
                      "3": 11,
                    },
                    winPercentage: 3258,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "AM",
                text: "Amerikansk",
                engText: "American",
                changed: false,
              },
              colour: {
                code: "BL",
                text: "Blå",
                engText: "Blue",
                changed: false,
              },
            },
            money: 9517453,
            color: "stickelhårig svartbrun",
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            owner: {
              id: 189279,
              name: "Stall Zet (Redén Daniel)",
            },
            breeder: {
              id: 806306,
              name: "Sergent Stables LLC & Andray Farm",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 4,
                  earnings: 42500000,
                  placement: {
                    "1": 2,
                    "2": 2,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 4,
                      },
                      place: 2,
                    },
                  ],
                },
                "2023": {
                  starts: 2,
                  earnings: 15000000,
                  placement: {
                    "1": 2,
                    "2": 0,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 0,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 39,
                earnings: 951745300,
                placement: {
                  "1": 22,
                  "2": 8,
                  "3": 1,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 9,
                      tenths: 1,
                    },
                    place: 1,
                    year: "2021",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 2,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "aaK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 9,
                      tenths: 2,
                    },
                    place: 1,
                    year: "2020",
                  },
                ],
                winPercentage: 5641,
                placePercentage: 7948,
                earningsPerStart: 24403725,
                startPoints: 5950,
              },
              lastFiveStarts: {
                averageOdds: 177,
              },
            },
            pedigree: {
              father: {
                id: 748142,
                name: "Father Patrick",
                nationality: "US",
              },
              mother: {
                id: 782147,
                name: "Behindclosedoors",
                nationality: "CA",
              },
              grandfather: {
                id: 568973,
                name: "Andover Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 67192,
            firstName: "Örjan",
            lastName: "Kihlström",
            shortName: "Kih Ör",
            location: "Bromma",
            birth: 1962,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Turkos, vitt axelparti, 2-del ärm; vit",
            statistics: {
              years: {
                "2022": {
                  starts: 1124,
                  earnings: 5732761800,
                  placement: {
                    "1": 235,
                    "2": 148,
                    "3": 135,
                  },
                  winPercentage: 2090,
                },
                "2023": {
                  starts: 312,
                  earnings: 1001431700,
                  placement: {
                    "1": 61,
                    "2": 33,
                    "3": 30,
                  },
                  winPercentage: 1955,
                },
              },
            },
          },
          result: {
            place: 6,
            finishOrder: 6,
            kmTime: {
              minutes: 1,
              seconds: 10,
              tenths: 9,
            },
            prizeMoney: 15000,
            finalOdds: 4.13,
            startNumber: 10,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 413,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 136,
              maxOdds: 136,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 2294,
            },
          },
          videos: [
            {
              mediaId: "1395450949333",
              timestamp: "2023-05-27T13:29:41",
            },
            {
              mediaId: "1395453509249",
              timestamp: "2023-05-27T13:40:33",
            },
            {
              mediaId: "1395453509398",
              timestamp: "2023-05-27T13:50:48",
            },
          ],
        },
      ],
      mergedPools: [
        {
          name: "A",
          betTypes: ["vinnare", "plats", "komb", "tvilling", "trio"],
        },
      ],
    },
    {
      id: "2023-05-27_5_6",
      name: "Hikoki - STL Diamantstoet, Final i Meeting 3",
      date: new Date("2023-05-27"),
      number: 6,
      distance: 2140,
      startMethod: "volte",
      startTime: new Date("2023-05-27T15:28:58"),
      scheduledStartTime: new Date("2023-05-27T15:25:00"),
      prize:
        "Pris: 220.000-110.000-62.000-35.000-22.000-15.000-10.000-6.000 kr (8 priser). Lägst 2.500 kr till alla tävlande.",
      terms: [
        "3-åriga och äldre ston. Körsvenskrav kat. 1. Körsvenner födda 050527 eller tidigare.",
        "Svenska Travligans och Solvallas hederspris till segrande hästs ägare, tränare, körsven, hästskötare och uppfödare. Menhammar Stuteris hederspris till segrande hästs uppfödare. Hederstäcke till segrande häst.",
        "2140 m. Tillägg 20 m vid vunna 520.001 kr, 40 m vid 1.300.001 kr ",
      ],
      sport: "trot",
      track: {
        id: 5,
        name: "Solvalla",
        condition: "light",
        countryCode: "SE",
      },
      result: {
        victoryMargin: "1 längd",
      },
      status: "results",
      mediaId: "1395476037226",
      pools: {
        vinnare: {
          "@type": ".VinnarePool",
          id: "vinnare_2023-05-27_5_6",
          status: "results",
          timestamp: "2023-05-27 15:34:55",
          turnover: 362186100,
          result: {
            "@type": ".VinnarePoolRaceResult",
            winners: [
              {
                number: 2,
                odds: 648,
              },
            ],
          },
        },
        plats: {
          "@type": ".PlatsPool",
          id: "plats_2023-05-27_5_6",
          status: "results",
          timestamp: "2023-05-27 15:34:55",
          turnover: 362186100,
          result: {
            "@type": ".PlatsPoolRaceResult",
            winners: {
              first: [
                {
                  number: 2,
                  odds: 256,
                },
              ],
              second: [
                {
                  number: 6,
                  odds: 949,
                },
              ],
              third: [
                {
                  number: 14,
                  odds: 280,
                },
              ],
            },
          },
        },
        tvilling: {
          "@type": ".TvillingPool",
          id: "tvilling_2023-05-27_5_6",
          status: "results",
          timestamp: "2023-05-27 15:36:14",
          turnover: 362186100,
          result: {
            "@type": ".TvillingPoolRaceResult",
            winners: [
              {
                combination: [2, 6],
                odds: 15309,
              },
            ],
          },
        },
        komb: {
          "@type": ".KombPool",
          id: "komb_2023-05-27_5_6",
          status: "results",
          timestamp: "2023-05-27 15:36:14",
          turnover: 362186100,
          result: {
            "@type": ".KombPoolRaceResult",
            winners: [
              {
                combination: [2, 6],
                odds: 21691,
              },
            ],
          },
        },
        trio: {
          "@type": ".TrioPool",
          id: "trio_2023-05-27_5_6",
          status: "results",
          timestamp: "2023-05-27 15:36:14",
          turnover: 362186100,
          result: {
            "@type": ".TrioPoolRaceResult",
            winners: [
              {
                combination: [2, 6, 14],
                odds: 209319,
              },
            ],
          },
        },
        V75: {
          "@type": ".Pool",
          result: {
            "@type": ".MarkingBetRacePoolResult",
            systems: "262191",
            value: {
              amount: 11600,
            },
            winners: [2],
            reserveOrder: [1, 2, 11, 14, 7, 8, 15, 13, 5, 9, 4, 3, 10, 6, 12],
          },
        },
      },
      subRows: [
        {
          number: 1,
          postPosition: 1,
          distance: 2140,
          horse: {
            id: 760035,
            name: "Ultra Violet",
            age: 6,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 0,
              },
            },
            trainer: {
              id: 149226,
              firstName: "André",
              lastName: "Eklundh",
              shortName: "Ekl An",
              location: "Nossebro",
              birth: 1986,
              homeTrack: {
                id: 6,
                name: "Åby",
              },
              license: "A-tränare: träna, köra",
              silks: "Vit, mblå stolpar och ärmb. vit axelp.; vi",
              statistics: {
                years: {
                  "2022": {
                    starts: 324,
                    earnings: 489562500,
                    placement: {
                      "1": 67,
                      "2": 41,
                      "3": 34,
                    },
                    winPercentage: 2067,
                  },
                  "2023": {
                    starts: 86,
                    earnings: 135020000,
                    placement: {
                      "1": 22,
                      "2": 17,
                      "3": 6,
                    },
                    winPercentage: 2558,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 400900,
            color: "fux",
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            owner: {
              id: 784024,
              name: "Jonsson Rolf",
              location: "Stenungsund",
            },
            breeder: {
              id: 738374,
              name: "Top Of Europe Management AB & Djuve A",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 6,
                  earnings: 5650000,
                  placement: {
                    "1": 0,
                    "2": 1,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 4,
                      },
                      place: 5,
                    },
                  ],
                },
                "2023": {
                  starts: 4,
                  earnings: 17150000,
                  placement: {
                    "1": 3,
                    "2": 0,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 1,
                      },
                      place: 1,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 0,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 23,
                earnings: 40090000,
                placement: {
                  "1": 5,
                  "2": 3,
                  "3": 4,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 1,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2021",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 4,
                    },
                    place: 3,
                    year: "2021",
                  },
                ],
                winPercentage: 2173,
                placePercentage: 5217,
                earningsPerStart: 1743043,
                startPoints: 2695,
              },
              lastFiveStarts: {
                averageOdds: 903,
              },
            },
            pedigree: {
              father: {
                id: 721257,
                name: "Readly Express",
              },
              mother: {
                id: 661119,
                name: "Blend of Gold",
              },
              grandfather: {
                id: 603016,
                name: "Cantab Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 149226,
            firstName: "André",
            lastName: "Eklundh",
            shortName: "Ekl An",
            location: "Nossebro",
            birth: 1986,
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            license: "A-tränare: träna, köra",
            silks: "Vit, mblå stolpar och ärmb. vit axelp.; vi",
            statistics: {
              years: {
                "2022": {
                  starts: 538,
                  earnings: 635920000,
                  placement: {
                    "1": 71,
                    "2": 58,
                    "3": 58,
                  },
                  winPercentage: 1319,
                },
                "2023": {
                  starts: 154,
                  earnings: 149890000,
                  placement: {
                    "1": 21,
                    "2": 21,
                    "3": 13,
                  },
                  winPercentage: 1363,
                },
              },
            },
          },
          result: {
            finishOrder: 44,
            kmTime: {
              code: "u",
            },
            galloped: true,
            disqualified: true,
            prizeMoney: 2500,
            finalOdds: 3,
            startNumber: 1,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 300,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 176,
              maxOdds: 176,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 2812,
              potentialPayout: {
                value: 7800,
              },
            },
          },
          videos: [
            {
              mediaId: "1395459141152",
              timestamp: "2023-05-27T14:04:50",
            },
            {
              mediaId: "1395459141280",
              timestamp: "2023-05-27T14:16:46",
            },
          ],
          out: true,
        },
        {
          number: 2,
          postPosition: 2,
          distance: 2140,
          horse: {
            id: 763967,
            name: "Kit Crown",
            age: 5,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 2,
              },
            },
            trainer: {
              id: 137528,
              firstName: "Öystein",
              lastName: "Tjomsland",
              shortName: "Tjo Öy",
              location: "Norge",
              birth: 1971,
              homeTrack: {
                id: 9,
                name: "Bergsåker",
              },
              license: "A-tränare: (Sv/utland): träna, köra",
              silks: "Gul, svarta sidor och midjeband; svart",
              statistics: {
                years: {
                  "2022": {
                    starts: 352,
                    earnings: 1223585600,
                    placement: {
                      "1": 101,
                      "2": 53,
                      "3": 37,
                    },
                    winPercentage: 2869,
                  },
                  "2023": {
                    starts: 203,
                    earnings: 292888300,
                    placement: {
                      "1": 47,
                      "2": 30,
                      "3": 20,
                    },
                    winPercentage: 2315,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 396300,
            color: "svartbrun",
            homeTrack: {
              id: 9,
              name: "Bergsåker",
            },
            owner: {
              id: 746995,
              name: "Pure Islet AB & Ragnar Bjurfors Gbg AB",
            },
            breeder: {
              id: 712281,
              name: "Sansiro AB",
              location: "Skanör",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 4,
                  earnings: 10500000,
                  placement: {
                    "1": 3,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 7,
                      },
                      place: 2,
                    },
                  ],
                },
                "2023": {
                  starts: 5,
                  earnings: 24400000,
                  placement: {
                    "1": 3,
                    "2": 0,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 0,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 2,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 13,
                earnings: 39630000,
                placement: {
                  "1": 6,
                  "2": 3,
                  "3": 0,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 0,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 2,
                    },
                    place: 1,
                    year: "2023",
                  },
                ],
                winPercentage: 4615,
                placePercentage: 6923,
                earningsPerStart: 3048461,
                startPoints: 3365,
              },
              lastFiveStarts: {
                averageOdds: 559,
              },
            },
            pedigree: {
              father: {
                id: 636691,
                name: "Raja Mirchi",
              },
              mother: {
                id: 717088,
                name: "Reginella Spin",
                nationality: "IT",
              },
              grandfather: {
                id: 603016,
                name: "Cantab Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 53685,
            firstName: "Ulf",
            lastName: "Ohlsson",
            shortName: "Ohl Ul",
            location: "Knivsta",
            birth: 1964,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, vita staplar; vit",
            statistics: {
              years: {
                "2022": {
                  starts: 1890,
                  earnings: 3360750300,
                  placement: {
                    "1": 241,
                    "2": 217,
                    "3": 195,
                  },
                  winPercentage: 1275,
                },
                "2023": {
                  starts: 680,
                  earnings: 897385000,
                  placement: {
                    "1": 100,
                    "2": 79,
                    "3": 63,
                  },
                  winPercentage: 1470,
                },
              },
            },
          },
          result: {
            place: 1,
            finishOrder: 1,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 6,
            },
            prizeMoney: 220000,
            finalOdds: 6.48,
            startNumber: 2,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 648,
              finalOdds: 648,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 256,
              maxOdds: 256,
              odds: 256,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1564,
              potentialPayout: {
                value: 11600,
              },
            },
          },
          videos: [
            {
              mediaId: "1395457605165",
              timestamp: "2023-05-27T14:11:17",
            },
          ],
        },
        {
          number: 3,
          postPosition: 3,
          distance: 2140,
          horse: {
            id: 763805,
            name: "Waytocashflow",
            nationality: "NO",
            age: 6,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 6,
              },
            },
            trainer: {
              id: 149571,
              firstName: "Lars Anvar",
              lastName: "Kolle",
              shortName: "Kol LA",
              location: "Norge",
              birth: 1970,
              license: "A-tränare (utland): träna, köra",
              silks: "Mörkblå, grått fält och ärmbindel; mblå",
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
              },
              back: {
                hasShoe: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 416326,
            color: "brun",
            owner: {
              id: 226009,
              name: "Brekke Björn & Gunvor S.",
              location: "Norge",
            },
            breeder: {
              id: 779818,
              name: "Björn & Gunvor Brekke",
              location: "Norge",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 11,
                  earnings: 15139300,
                  placement: {
                    "1": 2,
                    "2": 2,
                    "3": 3,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 1,
                      },
                      place: 3,
                    },
                  ],
                },
                "2023": {
                  starts: 7,
                  earnings: 17867100,
                  placement: {
                    "1": 3,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 3,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 6,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 29,
                earnings: 41632600,
                placement: {
                  "1": 7,
                  "2": 4,
                  "3": 5,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 1,
                    },
                    place: 3,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 6,
                    },
                    place: 1,
                    year: "2023",
                  },
                ],
                winPercentage: 2413,
                placePercentage: 5517,
                earningsPerStart: 1435606,
                startPoints: 1929,
              },
              lastFiveStarts: {
                averageOdds: 1253,
              },
            },
            pedigree: {
              father: {
                id: 721257,
                name: "Readly Express",
              },
              mother: {
                id: 752611,
                name: "Way Va Bene",
                nationality: "NO",
              },
              grandfather: {
                id: 594465,
                name: "Broadway Hall",
                nationality: "US",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 149571,
            firstName: "Lars Anvar",
            lastName: "Kolle",
            shortName: "Kol LA",
            location: "Norge",
            birth: 1970,
            license: "A-tränare (utland): träna, köra",
            silks: "Mörkblå, grått fält och ärmbindel; mblå",
            statistics: {
              years: {
                "2022": {
                  starts: 26,
                  earnings: 78720000,
                  placement: {
                    "1": 5,
                    "2": 5,
                    "3": 4,
                  },
                  winPercentage: 1923,
                },
                "2023": {
                  starts: 17,
                  earnings: 15898800,
                  placement: {
                    "1": 3,
                    "2": 3,
                    "3": 3,
                  },
                  winPercentage: 1764,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 11,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 2,
            },
            prizeMoney: 2500,
            finalOdds: 44.84,
            startNumber: 3,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 4484,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1025,
              maxOdds: 1025,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 186,
              potentialPayout: {
                value: 75800,
              },
            },
          },
          videos: [
            {
              mediaId: "1395464261148",
              timestamp: "2023-05-27T14:38:18",
            },
            {
              mediaId: "1395464773245",
              timestamp: "2023-05-27T14:49:05",
            },
            {
              mediaId: "1395466309114",
              timestamp: "2023-05-27T14:58:53",
            },
          ],
        },
        {
          number: 4,
          postPosition: 4,
          distance: 2140,
          horse: {
            id: 764909,
            name: "Ballerina Indika",
            age: 5,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 5,
              },
            },
            trainer: {
              id: 608305,
              firstName: "Jörgen S",
              lastName: "Eriksson",
              shortName: "Eri JS",
              location: "Eskilstuna",
              birth: 1987,
              homeTrack: {
                id: 14,
                name: "Eskilstuna",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart/vröd, diagonalt delad, ärmb; sv",
              statistics: {
                years: {
                  "2022": {
                    starts: 294,
                    earnings: 466258300,
                    placement: {
                      "1": 53,
                      "2": 49,
                      "3": 37,
                    },
                    winPercentage: 1802,
                  },
                  "2023": {
                    starts: 114,
                    earnings: 188334500,
                    placement: {
                      "1": 20,
                      "2": 16,
                      "3": 13,
                    },
                    winPercentage: 1754,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: true,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 486324,
            color: "brun",
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            owner: {
              id: 134918,
              name: "Easy KB",
              location: "Uppsala",
            },
            breeder: {
              id: 225393,
              name: "Axelsson Kåre",
              location: "Lindesberg",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 11,
                  earnings: 32800000,
                  placement: {
                    "1": 5,
                    "2": 3,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 5,
                      },
                      place: 1,
                    },
                  ],
                },
                "2023": {
                  starts: 4,
                  earnings: 10342400,
                  placement: {
                    "1": 0,
                    "2": 2,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 0,
                      },
                      place: 4,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 5,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 23,
                earnings: 48632400,
                placement: {
                  "1": 6,
                  "2": 5,
                  "3": 0,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 5,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 2,
                    },
                    place: 4,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 5,
                    },
                    place: 2,
                    year: "2023",
                  },
                ],
                winPercentage: 2608,
                placePercentage: 4782,
                earningsPerStart: 2114452,
                startPoints: 1834,
              },
              lastFiveStarts: {
                averageOdds: 531,
              },
            },
            pedigree: {
              father: {
                id: 588796,
                name: "Maharajah",
              },
              mother: {
                id: 720039,
                name: "Cash Queen Indika",
              },
              grandfather: {
                id: 667295,
                name: "Ready Cash",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 20055,
            firstName: "Åke",
            lastName: "Svanstedt",
            shortName: "Sva Åk",
            location: "Usa",
            birth: 1958,
            license: "A-tränare (utland): träna, köra",
            silks: "Grön, vit ruta; vit",
          },
          result: {
            place: 6,
            finishOrder: 6,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 9,
            },
            prizeMoney: 15000,
            finalOdds: 37.12,
            startNumber: 4,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 3712,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 816,
              maxOdds: 816,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 187,
              potentialPayout: {
                value: 72600,
              },
            },
          },
          videos: [
            {
              mediaId: "1395458117329",
              timestamp: "2023-05-27T14:13:38",
            },
            {
              mediaId: "1395460165204",
              timestamp: "2023-05-27T14:03:03",
            },
          ],
        },
        {
          number: 5,
          postPosition: 5,
          distance: 2140,
          horse: {
            id: 766762,
            name: "Roubine",
            age: 5,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 6,
              },
            },
            trainer: {
              id: 161607,
              firstName: "Björn",
              lastName: "Goop",
              shortName: "Goo Bj",
              location: "Karlstad",
              birth: 1976,
              homeTrack: {
                id: 15,
                name: "Färjestad",
              },
              license: "A-tränare: (Sv/utland): träna, köra",
              silks: "Mblå, guldf.midjeband, sömmar; guld",
              statistics: {
                years: {
                  "2022": {
                    starts: 1124,
                    earnings: 2204123200,
                    placement: {
                      "1": 158,
                      "2": 137,
                      "3": 127,
                    },
                    winPercentage: 1405,
                  },
                  "2023": {
                    starts: 400,
                    earnings: 754169400,
                    placement: {
                      "1": 53,
                      "2": 38,
                      "3": 40,
                    },
                    winPercentage: 1325,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 504000,
            color: "mörkbrun",
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            owner: {
              id: 667869,
              name: "Onkel Invest Oy",
              location: "Finland",
            },
            breeder: {
              id: 667869,
              name: "Onkel Invest Oy",
              location: "Finland",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 10,
                  earnings: 9950000,
                  placement: {
                    "1": 0,
                    "2": 2,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 5,
                      },
                      place: 5,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 6,
                      },
                      place: 2,
                    },
                  ],
                },
                "2023": {
                  starts: 6,
                  earnings: 9850000,
                  placement: {
                    "1": 0,
                    "2": 1,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 5,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 0,
                      },
                      place: 8,
                    },
                  ],
                },
              },
              life: {
                starts: 27,
                earnings: 50400000,
                placement: {
                  "1": 1,
                  "2": 8,
                  "3": 4,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 5,
                    },
                    place: 5,
                    year: "2022",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 6,
                    },
                    place: 5,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 6,
                    },
                    place: 2,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 7,
                    },
                    place: 3,
                    year: "2023",
                  },
                ],
                winPercentage: 370,
                placePercentage: 4814,
                earningsPerStart: 1866666,
                startPoints: 785,
              },
              lastFiveStarts: {
                averageOdds: 1593,
              },
            },
            pedigree: {
              father: {
                id: 667295,
                name: "Ready Cash",
                nationality: "FR",
              },
              mother: {
                id: 731077,
                name: "Unique Kronos",
              },
              grandfather: {
                id: 463269,
                name: "Varenne",
                nationality: "IT",
              },
            },
          },
          driver: {
            id: 161607,
            firstName: "Björn",
            lastName: "Goop",
            shortName: "Goo Bj",
            location: "Karlstad",
            birth: 1976,
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            license: "A-tränare: (Sv/utland): träna, köra",
            silks: "Mblå, guldf.midjeband, sömmar; guld",
            statistics: {
              years: {
                "2022": {
                  starts: 1260,
                  earnings: 4030146900,
                  placement: {
                    "1": 194,
                    "2": 167,
                    "3": 139,
                  },
                  winPercentage: 1539,
                },
                "2023": {
                  starts: 388,
                  earnings: 1036036000,
                  placement: {
                    "1": 59,
                    "2": 50,
                    "3": 36,
                  },
                  winPercentage: 1520,
                },
              },
            },
          },
          result: {
            finishOrder: 45,
            kmTime: {
              code: "u",
            },
            galloped: true,
            disqualified: true,
            prizeMoney: 2500,
            finalOdds: 24.54,
            startNumber: 5,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 2454,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 623,
              maxOdds: 623,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 313,
              potentialPayout: {
                value: 44400,
              },
            },
          },
          videos: [
            {
              mediaId: "1395456581252",
              timestamp: "2023-05-27T14:04:50",
            },
          ],
          out: true,
        },
        {
          number: 6,
          postPosition: 6,
          distance: 2140,
          horse: {
            id: 772097,
            name: "Pam Trot",
            age: 4,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 5,
              },
            },
            trainer: {
              id: 578549,
              firstName: "Giuseppe",
              lastName: "Lubrano",
              shortName: "Lub Gi",
              location: "Halmstad",
              birth: 1981,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "A-tränare: träna, köra",
              silks: "Vit, ljusblå sidor och ärmar; vit",
              statistics: {
                years: {
                  "2022": {
                    starts: 143,
                    earnings: 147510000,
                    placement: {
                      "1": 15,
                      "2": 16,
                      "3": 18,
                    },
                    winPercentage: 1048,
                  },
                  "2023": {
                    starts: 39,
                    earnings: 53390000,
                    placement: {
                      "1": 2,
                      "2": 8,
                      "3": 8,
                    },
                    winPercentage: 512,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 399800,
            color: "brun",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 787635,
              name: "Stråvalla Gård AB",
              location: "Kullavik",
            },
            breeder: {
              id: 568215,
              name: "Karlsson Ove",
              location: "Fjugesta",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 16,
                  earnings: 29500000,
                  placement: {
                    "1": 3,
                    "2": 2,
                    "3": 4,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 9,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 5,
                      },
                      place: 1,
                    },
                  ],
                },
                "2023": {
                  starts: 4,
                  earnings: 10480000,
                  placement: {
                    "1": 0,
                    "2": 1,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aL",
                      startMethod: "auto",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 4,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 6,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 20,
                earnings: 39980000,
                placement: {
                  "1": 3,
                  "2": 3,
                  "3": 6,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 9,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 2,
                    },
                    place: 6,
                    year: "2022",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 4,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 6,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 5,
                    },
                    place: 1,
                    year: "2022",
                  },
                ],
                winPercentage: 1500,
                placePercentage: 6000,
                earningsPerStart: 1999000,
                startPoints: 2168,
              },
              lastFiveStarts: {
                averageOdds: 1637,
              },
            },
            pedigree: {
              father: {
                id: 647694,
                name: "Panne de Moteur",
              },
              mother: {
                id: 739156,
                name: "Give 'n Take U.S.",
                nationality: "US",
              },
              grandfather: {
                id: 603016,
                name: "Cantab Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 578549,
            firstName: "Giuseppe",
            lastName: "Lubrano",
            shortName: "Lub Gi",
            location: "Halmstad",
            birth: 1981,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "A-tränare: träna, köra",
            silks: "Vit, ljusblå sidor och ärmar; vit",
            statistics: {
              years: {
                "2022": {
                  starts: 90,
                  earnings: 85280000,
                  placement: {
                    "1": 6,
                    "2": 7,
                    "3": 11,
                  },
                  winPercentage: 666,
                },
                "2023": {
                  starts: 31,
                  earnings: 42550000,
                  placement: {
                    "1": 1,
                    "2": 6,
                    "3": 6,
                  },
                  winPercentage: 322,
                },
              },
            },
          },
          result: {
            place: 2,
            finishOrder: 2,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 7,
            },
            prizeMoney: 110000,
            finalOdds: 52.54,
            startNumber: 6,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 5254,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 949,
              maxOdds: 949,
              odds: 949,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 119,
              potentialPayout: {
                value: 105900,
              },
            },
          },
          videos: [
            {
              mediaId: "1395458117128",
              timestamp: "2023-05-27T14:03:24",
            },
            {
              mediaId: "1395458629301",
              timestamp: "2023-05-27T14:15:05",
            },
            {
              mediaId: "1395459141471",
              timestamp: "2023-05-27T14:24:07",
            },
          ],
        },
        {
          number: 7,
          postPosition: 7,
          distance: 2140,
          horse: {
            id: 763603,
            name: "Toscana Southwind",
            age: 5,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 3,
              },
            },
            trainer: {
              id: 529886,
              firstName: "Troels",
              lastName: "Andersen",
              shortName: "And Tr",
              location: "Tärnsjö",
              birth: 1980,
              homeTrack: {
                id: 16,
                name: "Gävle",
              },
              license: "A-tränare: träna, köra",
              silks: "Mblå, vit fält och silver romber axelp; mb",
              statistics: {
                years: {
                  "2022": {
                    starts: 137,
                    earnings: 155793500,
                    placement: {
                      "1": 16,
                      "2": 16,
                      "3": 14,
                    },
                    winPercentage: 1167,
                  },
                  "2023": {
                    starts: 25,
                    earnings: 26820000,
                    placement: {
                      "1": 4,
                      "2": 4,
                      "3": 1,
                    },
                    winPercentage: 1600,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 296000,
            color: "mörkbrun",
            homeTrack: {
              id: 16,
              name: "Gävle",
            },
            owner: {
              id: 780634,
              name: "Dala-Dala AB & S. Hansen Vet.prakt.AB",
            },
            breeder: {
              id: 165626,
              name: "Höglund Jan-Eric & Lisbet",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 7,
                  earnings: 13300000,
                  placement: {
                    "1": 5,
                    "2": 0,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 2,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 6,
                      },
                      place: 1,
                    },
                  ],
                },
                "2023": {
                  starts: 7,
                  earnings: 15650000,
                  placement: {
                    "1": 2,
                    "2": 2,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 5,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 3,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 16,
                earnings: 29600000,
                placement: {
                  "1": 7,
                  "2": 2,
                  "3": 2,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 2,
                    },
                    place: 0,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 3,
                    },
                    place: 2,
                    year: "2023",
                  },
                ],
                winPercentage: 4375,
                placePercentage: 6875,
                earningsPerStart: 1850000,
                startPoints: 1865,
              },
              lastFiveStarts: {
                averageOdds: 517,
              },
            },
            pedigree: {
              father: {
                id: 741746,
                name: "Bold Eagle",
                nationality: "FR",
              },
              mother: {
                id: 682831,
                name: "Coco Chip",
                nationality: "US",
              },
              grandfather: {
                id: 565947,
                name: "Chip Chip Hooray",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 529886,
            firstName: "Troels",
            lastName: "Andersen",
            shortName: "And Tr",
            location: "Tärnsjö",
            birth: 1980,
            homeTrack: {
              id: 16,
              name: "Gävle",
            },
            license: "A-tränare: träna, köra",
            silks: "Mblå, vit fält och silver romber axelp; mb",
            statistics: {
              years: {
                "2022": {
                  starts: 153,
                  earnings: 151203500,
                  placement: {
                    "1": 19,
                    "2": 14,
                    "3": 14,
                  },
                  winPercentage: 1241,
                },
                "2023": {
                  starts: 20,
                  earnings: 21840000,
                  placement: {
                    "1": 3,
                    "2": 3,
                    "3": 1,
                  },
                  winPercentage: 1500,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 10,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 1,
            },
            prizeMoney: 2500,
            finalOdds: 14.67,
            startNumber: 7,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1467,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 402,
              maxOdds: 402,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 583,
              potentialPayout: {
                value: 27300,
              },
            },
          },
          videos: [
            {
              mediaId: "1395445829447",
              timestamp: "2023-05-27T13:28:09",
            },
            {
              mediaId: "1395452997115",
              timestamp: "2023-05-27T13:39:32",
            },
            {
              mediaId: "1395455557359",
              timestamp: "2023-05-27T13:49:06",
            },
          ],
        },
        {
          number: 8,
          postPosition: 8,
          distance: 2140,
          horse: {
            id: 774317,
            name: "Future Sox",
            age: 4,
            sex: "mare",
            record: {
              code: "L",
              startMethod: "volte",
              distance: "long",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 6,
              },
            },
            trainer: {
              id: 608305,
              firstName: "Jörgen S",
              lastName: "Eriksson",
              shortName: "Eri JS",
              location: "Eskilstuna",
              birth: 1987,
              homeTrack: {
                id: 14,
                name: "Eskilstuna",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart/vröd, diagonalt delad, ärmb; sv",
              statistics: {
                years: {
                  "2022": {
                    starts: 294,
                    earnings: 466258300,
                    placement: {
                      "1": 53,
                      "2": 49,
                      "3": 37,
                    },
                    winPercentage: 1802,
                  },
                  "2023": {
                    starts: 114,
                    earnings: 188334500,
                    placement: {
                      "1": 20,
                      "2": 16,
                      "3": 13,
                    },
                    winPercentage: 1754,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: true,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 367824,
            color: "brun",
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            owner: {
              id: 829652,
              name: "Team EvaKarin - OfCourse",
            },
            breeder: {
              id: 758746,
              name: "Boholm Joakim & Mitchell Craig",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 9,
                  earnings: 13820000,
                  placement: {
                    "1": 2,
                    "2": 0,
                    "3": 3,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 4,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 5,
                      },
                      place: 3,
                    },
                  ],
                },
                "2023": {
                  starts: 6,
                  earnings: 22962400,
                  placement: {
                    "1": 1,
                    "2": 4,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 9,
                      },
                      place: 5,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 6,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 15,
                earnings: 36782400,
                placement: {
                  "1": 3,
                  "2": 4,
                  "3": 3,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 9,
                    },
                    place: 5,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 18,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 1,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 6,
                    },
                    place: 2,
                    year: "2023",
                  },
                ],
                winPercentage: 2000,
                placePercentage: 6666,
                earningsPerStart: 2452160,
                startPoints: 2921,
              },
              lastFiveStarts: {
                averageOdds: 2192,
              },
            },
            pedigree: {
              father: {
                id: 741746,
                name: "Bold Eagle",
                nationality: "FR",
              },
              mother: {
                id: 754352,
                name: "Moni Sox",
                nationality: "US",
              },
              grandfather: {
                id: 702857,
                name: "Explosive Matter",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 608305,
            firstName: "Jörgen S",
            lastName: "Eriksson",
            shortName: "Eri JS",
            location: "Eskilstuna",
            birth: 1987,
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart/vröd, diagonalt delad, ärmb; sv",
            statistics: {
              years: {
                "2022": {
                  starts: 260,
                  earnings: 405328300,
                  placement: {
                    "1": 40,
                    "2": 40,
                    "3": 31,
                  },
                  winPercentage: 1538,
                },
                "2023": {
                  starts: 95,
                  earnings: 139065900,
                  placement: {
                    "1": 12,
                    "2": 13,
                    "3": 11,
                  },
                  winPercentage: 1263,
                },
              },
            },
          },
          result: {
            place: 4,
            finishOrder: 4,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 8,
            },
            prizeMoney: 35000,
            finalOdds: 19.29,
            startNumber: 8,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1929,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 406,
              maxOdds: 406,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 470,
              potentialPayout: {
                value: 30600,
              },
            },
          },
          videos: [
            {
              mediaId: "1395459653407",
              timestamp: "2023-05-27T14:29:23",
            },
            {
              mediaId: "1395464261164",
              timestamp: "2023-05-27T14:39:31",
            },
            {
              mediaId: "1395464773272",
              timestamp: "2023-05-27T14:49:53",
            },
          ],
        },
        {
          number: 9,
          postPosition: 9,
          distance: 2140,
          horse: {
            id: 767363,
            name: "Classy Knox",
            age: 5,
            sex: "mare",
            record: {
              code: "K",
              startMethod: "volte",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 7,
              },
            },
            trainer: {
              id: 86024,
              firstName: "Håkan K",
              lastName: "Persson",
              shortName: "Per HK",
              location: "Falkenberg",
              birth: 1968,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "A-tränare: träna, köra",
              silks: "Vinröd, beige/vit/svart axelsk; vinröd",
              statistics: {
                years: {
                  "2022": {
                    starts: 259,
                    earnings: 353098300,
                    placement: {
                      "1": 31,
                      "2": 35,
                      "3": 34,
                    },
                    winPercentage: 1196,
                  },
                  "2023": {
                    starts: 79,
                    earnings: 125373800,
                    placement: {
                      "1": 16,
                      "2": 11,
                      "3": 7,
                    },
                    winPercentage: 2025,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 446650,
            color: "brun",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 807894,
              name: "Stall Flintstone - Easy",
            },
            breeder: {
              id: 222875,
              name: "Arvenberg Björn",
              location: "Söderala",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 11,
                  earnings: 16175000,
                  placement: {
                    "1": 1,
                    "2": 4,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 0,
                      },
                      place: 7,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 6,
                      },
                      place: 2,
                    },
                  ],
                },
                "2023": {
                  starts: 6,
                  earnings: 18900000,
                  placement: {
                    "1": 2,
                    "2": 0,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 0,
                      },
                      place: 3,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 7,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 22,
                earnings: 44665000,
                placement: {
                  "1": 4,
                  "2": 5,
                  "3": 4,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 0,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 9,
                    },
                    place: 5,
                    year: "2022",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 7,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 6,
                    },
                    place: 2,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 8,
                    },
                    place: 6,
                    year: "2023",
                  },
                ],
                winPercentage: 1818,
                placePercentage: 5909,
                earningsPerStart: 2030227,
                startPoints: 2040,
              },
              lastFiveStarts: {
                averageOdds: 1484,
              },
            },
            pedigree: {
              father: {
                id: 740136,
                name: "Uncle Lasse",
                nationality: "US",
              },
              mother: {
                id: 701241,
                name: "Classy Credit",
                nationality: "US",
              },
              grandfather: {
                id: 501073,
                name: "Credit Winner",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 145716,
            firstName: "Stefan",
            lastName: "Persson",
            shortName: "Per St",
            location: "Halmstad",
            birth: 1973,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, ljusblå sidor; svart",
            statistics: {
              years: {
                "2022": {
                  starts: 1283,
                  earnings: 1884680900,
                  placement: {
                    "1": 179,
                    "2": 160,
                    "3": 148,
                  },
                  winPercentage: 1395,
                },
                "2023": {
                  starts: 613,
                  earnings: 822739500,
                  placement: {
                    "1": 82,
                    "2": 67,
                    "3": 76,
                  },
                  winPercentage: 1337,
                },
              },
            },
          },
          result: {
            place: 7,
            finishOrder: 7,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 9,
            },
            prizeMoney: 10000,
            finalOdds: 16.97,
            startNumber: 9,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1697,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 431,
              maxOdds: 431,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 305,
              potentialPayout: {
                value: 44600,
              },
            },
          },
        },
        {
          number: 10,
          postPosition: 10,
          distance: 2140,
          horse: {
            id: 768540,
            name: "Queen",
            age: 5,
            sex: "mare",
            record: {
              code: "K",
              startMethod: "volte",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 4,
              },
            },
            trainer: {
              id: 161607,
              firstName: "Björn",
              lastName: "Goop",
              shortName: "Goo Bj",
              location: "Karlstad",
              birth: 1976,
              homeTrack: {
                id: 15,
                name: "Färjestad",
              },
              license: "A-tränare: (Sv/utland): träna, köra",
              silks: "Mblå, guldf.midjeband, sömmar; guld",
              statistics: {
                years: {
                  "2022": {
                    starts: 1124,
                    earnings: 2204123200,
                    placement: {
                      "1": 158,
                      "2": 137,
                      "3": 127,
                    },
                    winPercentage: 1405,
                  },
                  "2023": {
                    starts: 400,
                    earnings: 754169400,
                    placement: {
                      "1": 53,
                      "2": 38,
                      "3": 40,
                    },
                    winPercentage: 1325,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: true,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 422900,
            color: "mörkbrun",
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            owner: {
              id: 709337,
              name: "Fairlane Trotting HB",
              location: "Vimmerby",
            },
            breeder: {
              id: 462401,
              name: "Goop Annika",
              location: "Kil",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 9,
                  earnings: 15300000,
                  placement: {
                    "1": 2,
                    "2": 1,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 8,
                      },
                      place: 4,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 4,
                      },
                      place: 4,
                    },
                  ],
                },
                "2023": {
                  starts: 7,
                  earnings: 18840000,
                  placement: {
                    "1": 0,
                    "2": 1,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 0,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 2,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 20,
                earnings: 42290000,
                placement: {
                  "1": 3,
                  "2": 3,
                  "3": 3,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 8,
                    },
                    place: 3,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 0,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 4,
                    },
                    place: 4,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 2,
                    },
                    place: 3,
                    year: "2023",
                  },
                ],
                winPercentage: 1500,
                placePercentage: 4500,
                earningsPerStart: 2114500,
                startPoints: 1939,
              },
              lastFiveStarts: {
                averageOdds: 1532,
              },
            },
            pedigree: {
              father: {
                id: 463269,
                name: "Varenne",
                nationality: "IT",
              },
              mother: {
                id: 716819,
                name: "Claudia B.R.",
                nationality: "NO",
              },
              grandfather: {
                id: 543528,
                name: "Dream Vacation",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 43521,
            firstName: "Carl Johan",
            lastName: "Jepson",
            shortName: "Jep CJ",
            location: "Karlstad",
            birth: 1977,
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, mörkblå axelparti; mblå",
            statistics: {
              years: {
                "2022": {
                  starts: 1190,
                  earnings: 1785508600,
                  placement: {
                    "1": 169,
                    "2": 143,
                    "3": 146,
                  },
                  winPercentage: 1420,
                },
                "2023": {
                  starts: 468,
                  earnings: 702016800,
                  placement: {
                    "1": 66,
                    "2": 55,
                    "3": 49,
                  },
                  winPercentage: 1410,
                },
              },
            },
          },
          result: {
            place: 8,
            finishOrder: 8,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 1,
            },
            prizeMoney: 6000,
            finalOdds: 35.92,
            startNumber: 10,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 3592,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 651,
              maxOdds: 651,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 179,
              potentialPayout: {
                value: 81600,
              },
            },
          },
          videos: [
            {
              mediaId: "1395457093398",
              timestamp: "2023-05-27T14:04:18",
            },
          ],
        },
        {
          number: 11,
          postPosition: 1,
          distance: 2160,
          horse: {
            id: 755587,
            name: "Marabou Brodda",
            age: 6,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 0,
              },
            },
            trainer: {
              id: 56965,
              firstName: "Thomas",
              lastName: "Uhrberg",
              shortName: "Uhr Th",
              location: "Munka-Ljungby",
              birth: 1961,
              homeTrack: {
                id: 7,
                name: "Jägersro",
              },
              license: "A-tränare: träna, köra",
              silks: "Grön, vitt axelparti, vinkel och ärmr; vit",
              statistics: {
                years: {
                  "2022": {
                    starts: 201,
                    earnings: 342591800,
                    placement: {
                      "1": 27,
                      "2": 30,
                      "3": 19,
                    },
                    winPercentage: 1343,
                  },
                  "2023": {
                    starts: 58,
                    earnings: 138032000,
                    placement: {
                      "1": 12,
                      "2": 11,
                      "3": 6,
                    },
                    winPercentage: 2068,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 774164,
            color: "svartbrun",
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            owner: {
              id: 783554,
              name: "Pekean AB",
              location: "Askim",
            },
            breeder: {
              id: 230444,
              name: "Brodda Stuteri AB",
              location: "Skurup",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 12,
                  earnings: 21716400,
                  placement: {
                    "1": 4,
                    "2": 3,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 0,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 3,
                      },
                      place: 1,
                    },
                  ],
                },
                "2023": {
                  starts: 6,
                  earnings: 53200000,
                  placement: {
                    "1": 3,
                    "2": 2,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 1,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 0,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 19,
                earnings: 77416400,
                placement: {
                  "1": 8,
                  "2": 5,
                  "3": 1,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 1,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 0,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 7,
                    },
                    place: 2,
                    year: "2022",
                  },
                ],
                winPercentage: 4210,
                placePercentage: 7368,
                earningsPerStart: 4074547,
                startPoints: 5220,
              },
              lastFiveStarts: {
                averageOdds: 557,
              },
            },
            pedigree: {
              father: {
                id: 581297,
                name: "Chocolatier",
                nationality: "US",
              },
              mother: {
                id: 731895,
                name: "Miami Brodda",
              },
              grandfather: {
                id: 698406,
                name: "The Best Madrik",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 56965,
            firstName: "Thomas",
            lastName: "Uhrberg",
            shortName: "Uhr Th",
            location: "Munka-Ljungby",
            birth: 1961,
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            license: "A-tränare: träna, köra",
            silks: "Grön, vitt axelparti, vinkel och ärmr; vit",
            statistics: {
              years: {
                "2022": {
                  starts: 503,
                  earnings: 816424200,
                  placement: {
                    "1": 64,
                    "2": 64,
                    "3": 57,
                  },
                  winPercentage: 1272,
                },
                "2023": {
                  starts: 219,
                  earnings: 365487600,
                  placement: {
                    "1": 31,
                    "2": 31,
                    "3": 30,
                  },
                  winPercentage: 1415,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 9,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 4,
            },
            prizeMoney: 2500,
            finalOdds: 6.74,
            startNumber: 11,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 674,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 239,
              maxOdds: 239,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1412,
              potentialPayout: {
                value: 13200,
              },
            },
          },
          videos: [
            {
              mediaId: "1395458117127",
              timestamp: "2023-05-27T14:02:23",
            },
            {
              mediaId: "1395458117327",
              timestamp: "2023-05-27T14:13:28",
            },
          ],
        },
        {
          number: 12,
          postPosition: 2,
          distance: 2160,
          horse: {
            id: 759866,
            name: "Precious Lane",
            age: 6,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 4,
              },
            },
            trainer: {
              id: 549496,
              firstName: "Johan",
              lastName: "Untersteiner",
              shortName: "Unt Jo",
              location: "Holm",
              birth: 1984,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, vit/röda axelklaffar; svart",
              statistics: {
                years: {
                  "2022": {
                    starts: 1292,
                    earnings: 2740982900,
                    placement: {
                      "1": 237,
                      "2": 161,
                      "3": 146,
                    },
                    winPercentage: 1834,
                  },
                  "2023": {
                    starts: 427,
                    earnings: 914457400,
                    placement: {
                      "1": 95,
                      "2": 70,
                      "3": 47,
                    },
                    winPercentage: 2224,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: true,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 716426,
            color: "svart",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 556348,
              name: "Levaux AB",
              location: "Limhamn",
            },
            breeder: {
              id: 248206,
              name: "Prestera International AB",
              location: "Limhamn",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 17,
                  earnings: 21880000,
                  placement: {
                    "1": 3,
                    "2": 2,
                    "3": 3,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 1,
                      },
                      place: 2,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 1,
                      },
                      place: 2,
                    },
                  ],
                },
                "2023": {
                  starts: 8,
                  earnings: 21142600,
                  placement: {
                    "1": 1,
                    "2": 0,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 2,
                      },
                      place: 6,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 4,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 42,
                earnings: 71642600,
                placement: {
                  "1": 7,
                  "2": 10,
                  "3": 6,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 0,
                    },
                    place: 7,
                    year: "2021",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 8,
                    },
                    place: 2,
                    year: "2021",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 0,
                    },
                    place: 4,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 4,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 1,
                    },
                    place: 2,
                    year: "2022",
                  },
                ],
                winPercentage: 1666,
                placePercentage: 5476,
                earningsPerStart: 1705776,
                startPoints: 1174,
              },
              lastFiveStarts: {
                averageOdds: 1396,
              },
            },
            pedigree: {
              father: {
                id: 581297,
                name: "Chocolatier",
                nationality: "US",
              },
              mother: {
                id: 749356,
                name: "Sweet Grif Italia",
                nationality: "IT",
              },
              grandfather: {
                id: 568973,
                name: "Andover Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 549496,
            firstName: "Johan",
            lastName: "Untersteiner",
            shortName: "Unt Jo",
            location: "Holm",
            birth: 1984,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, vit/röda axelklaffar; svart",
            statistics: {
              years: {
                "2022": {
                  starts: 823,
                  earnings: 1831202700,
                  placement: {
                    "1": 149,
                    "2": 111,
                    "3": 86,
                  },
                  winPercentage: 1810,
                },
                "2023": {
                  starts: 293,
                  earnings: 698040000,
                  placement: {
                    "1": 74,
                    "2": 44,
                    "3": 30,
                  },
                  winPercentage: 2525,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 13,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 7,
            },
            prizeMoney: 2500,
            finalOdds: 93.67,
            startNumber: 12,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 9367,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1741,
              maxOdds: 1741,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 60,
              potentialPayout: {
                value: 217100,
              },
            },
          },
          videos: [
            {
              mediaId: "1395456069489",
              timestamp: "2023-05-27T14:01:34",
            },
            {
              mediaId: "1395458117475",
              timestamp: "2023-05-27T14:21:24",
            },
            {
              mediaId: "1395460677117",
              timestamp: "2023-05-27T14:11:29",
            },
          ],
        },
        {
          number: 13,
          postPosition: 3,
          distance: 2160,
          horse: {
            id: 757674,
            name: "Vilja T.Y.C.",
            age: 6,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 3,
              },
            },
            trainer: {
              id: 151098,
              firstName: "Stefan",
              lastName: "Arvidsson",
              shortName: "Arv St",
              location: "Bollnäs",
              birth: 1974,
              homeTrack: {
                id: 12,
                name: "Bollnäs",
              },
              license: "A-tränare: träna, köra",
              silks: "Röd, svart kil, vita stj ärm; svart",
              statistics: {
                years: {
                  "2022": {
                    starts: 320,
                    earnings: 364730000,
                    placement: {
                      "1": 25,
                      "2": 34,
                      "3": 34,
                    },
                    winPercentage: 781,
                  },
                  "2023": {
                    starts: 113,
                    earnings: 117870000,
                    placement: {
                      "1": 7,
                      "2": 12,
                      "3": 15,
                    },
                    winPercentage: 619,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: true,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 614200,
            color: "brun",
            homeTrack: {
              id: 12,
              name: "Bollnäs",
            },
            owner: {
              id: 715125,
              name: "H J F Entreprenad AB",
              location: "Alfta",
            },
            breeder: {
              id: 502146,
              name: "Teccet AB",
              location: "Klippan",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 15,
                  earnings: 26520000,
                  placement: {
                    "1": 1,
                    "2": 1,
                    "3": 4,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 6,
                      },
                      place: 6,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 3,
                      },
                      place: 5,
                    },
                  ],
                },
                "2023": {
                  starts: 6,
                  earnings: 16600000,
                  placement: {
                    "1": 1,
                    "2": 1,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 9,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 8,
                      },
                      place: 7,
                    },
                  ],
                },
              },
              life: {
                starts: 33,
                earnings: 61420000,
                placement: {
                  "1": 5,
                  "2": 4,
                  "3": 6,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 2,
                    },
                    place: 4,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 9,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 3,
                    },
                    place: 5,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 2,
                    },
                    place: 3,
                    year: "2022",
                  },
                ],
                winPercentage: 1515,
                placePercentage: 4545,
                earningsPerStart: 1861212,
                startPoints: 1840,
              },
              lastFiveStarts: {
                averageOdds: 1236,
              },
            },
            pedigree: {
              father: {
                id: 705071,
                name: "Brad de Veluwe",
                nationality: "FI",
              },
              mother: {
                id: 732135,
                name: "Take Your Chance",
              },
              grandfather: {
                id: 562580,
                name: "Love You",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 67192,
            firstName: "Örjan",
            lastName: "Kihlström",
            shortName: "Kih Ör",
            location: "Bromma",
            birth: 1962,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Turkos, vitt axelparti, 2-del ärm; vit",
            statistics: {
              years: {
                "2022": {
                  starts: 1124,
                  earnings: 5732761800,
                  placement: {
                    "1": 235,
                    "2": 148,
                    "3": 135,
                  },
                  winPercentage: 2090,
                },
                "2023": {
                  starts: 312,
                  earnings: 1001431700,
                  placement: {
                    "1": 61,
                    "2": 33,
                    "3": 30,
                  },
                  winPercentage: 1955,
                },
              },
            },
          },
          result: {
            place: 5,
            finishOrder: 5,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 2,
            },
            prizeMoney: 22000,
            finalOdds: 25.52,
            startNumber: 13,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 2552,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 634,
              maxOdds: 634,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 347,
              potentialPayout: {
                value: 43700,
              },
            },
          },
          videos: [
            {
              mediaId: "1395459141286",
              timestamp: "2023-05-27T14:16:59",
            },
            {
              mediaId: "1395460165261",
              timestamp: "2023-05-27T14:06:26",
            },
            {
              mediaId: "1395462213267",
              timestamp: "2023-05-27T14:37:07",
            },
            {
              mediaId: "1395463749162",
              timestamp: "2023-05-27T14:27:31",
            },
          ],
        },
        {
          number: 14,
          postPosition: 4,
          distance: 2160,
          horse: {
            id: 766592,
            name: "Infinity Sisu",
            age: 5,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 0,
              },
            },
            trainer: {
              id: 659515,
              firstName: "Oskar J",
              lastName: "Andersson",
              shortName: "And OJ",
              location: "Sala",
              birth: 1992,
              homeTrack: {
                id: 14,
                name: "Eskilstuna",
              },
              license: "A-tränare: träna, köra",
              silks: "Mblå, silver och svarta detaljer; mblå",
              statistics: {
                years: {
                  "2022": {
                    starts: 271,
                    earnings: 407450300,
                    placement: {
                      "1": 53,
                      "2": 41,
                      "3": 32,
                    },
                    winPercentage: 1955,
                  },
                  "2023": {
                    starts: 103,
                    earnings: 167525100,
                    placement: {
                      "1": 14,
                      "2": 11,
                      "3": 16,
                    },
                    winPercentage: 1359,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: true,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: true,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 547747,
            color: "mörkbrun",
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            owner: {
              id: 134918,
              name: "Easy KB",
              location: "Uppsala",
            },
            breeder: {
              id: 644300,
              name: "Sisyfos Breeders AB",
              location: "Sigtuna",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 12,
                  earnings: 35250000,
                  placement: {
                    "1": 4,
                    "2": 2,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 6,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 1,
                    },
                  ],
                },
                "2023": {
                  starts: 2,
                  earnings: 13524700,
                  placement: {
                    "1": 1,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 5,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 16,
                earnings: 54774700,
                placement: {
                  "1": 6,
                  "2": 4,
                  "3": 0,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 6,
                    },
                    place: 0,
                    year: "2022",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 3,
                    },
                    place: 7,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 19,
                      tenths: 9,
                    },
                    place: 2,
                    year: "2021",
                  },
                ],
                winPercentage: 3750,
                placePercentage: 6250,
                earningsPerStart: 3423418,
                startPoints: 3032,
              },
              lastFiveStarts: {
                averageOdds: 1644,
              },
            },
            pedigree: {
              father: {
                id: 601184,
                name: "Classic Photo",
                nationality: "US",
              },
              mother: {
                id: 726863,
                name: "Chocolate Gem",
                nationality: "US",
              },
              grandfather: {
                id: 581297,
                name: "Chocolatier",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 659515,
            firstName: "Oskar J",
            lastName: "Andersson",
            shortName: "And OJ",
            location: "Sala",
            birth: 1992,
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            license: "A-tränare: träna, köra",
            silks: "Mblå, silver och svarta detaljer; mblå",
            statistics: {
              years: {
                "2022": {
                  starts: 395,
                  earnings: 507631400,
                  placement: {
                    "1": 58,
                    "2": 54,
                    "3": 36,
                  },
                  winPercentage: 1468,
                },
                "2023": {
                  starts: 130,
                  earnings: 202595100,
                  placement: {
                    "1": 18,
                    "2": 13,
                    "3": 18,
                  },
                  winPercentage: 1384,
                },
              },
            },
          },
          result: {
            place: 3,
            finishOrder: 3,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 1,
            },
            prizeMoney: 62000,
            finalOdds: 8.21,
            startNumber: 14,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 821,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 280,
              maxOdds: 280,
              odds: 280,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1061,
              potentialPayout: {
                value: 16000,
              },
            },
          },
          videos: [
            {
              mediaId: "1395456581251",
              timestamp: "2023-05-27T14:04:50",
            },
            {
              mediaId: "1395459653229",
              timestamp: "2023-05-27T14:15:00",
            },
          ],
        },
        {
          number: 15,
          postPosition: 1,
          distance: 2180,
          horse: {
            id: 738385,
            name: "Devs Daffodil",
            age: 9,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 12,
                tenths: 5,
              },
            },
            trainer: {
              id: 181913,
              firstName: "Conrad",
              lastName: "Lugauer",
              shortName: "Lug Co",
              location: "Blentarp",
              birth: 1974,
              homeTrack: {
                id: 7,
                name: "Jägersro",
              },
              license: "A-tränare: träna, köra",
              silks: "Mörkblå, vit/gul hängslen; mörkblå",
              statistics: {
                years: {
                  "2022": {
                    starts: 530,
                    earnings: 1025287100,
                    placement: {
                      "1": 95,
                      "2": 64,
                      "3": 53,
                    },
                    winPercentage: 1792,
                  },
                  "2023": {
                    starts: 206,
                    earnings: 531648300,
                    placement: {
                      "1": 48,
                      "2": 32,
                      "3": 27,
                    },
                    winPercentage: 2330,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
              },
              back: {
                hasShoe: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 2130542,
            color: "brun",
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            owner: {
              id: 734128,
              name: "Stall Kryddan HB",
              location: "Berga",
            },
            breeder: {
              id: 563848,
              name: "Bergenstam-Hansson M",
              location: "Hansson J & F",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 16,
                  earnings: 60629200,
                  placement: {
                    "1": 2,
                    "2": 1,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 9,
                      },
                      place: 4,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 3,
                      },
                      place: 8,
                    },
                  ],
                },
                "2023": {
                  starts: 2,
                  earnings: 6598800,
                  placement: {
                    "1": 0,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 5,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 82,
                earnings: 213054200,
                placement: {
                  "1": 14,
                  "2": 12,
                  "3": 9,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 9,
                    },
                    place: 4,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 9,
                    },
                    place: 3,
                    year: "2022",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 8,
                    },
                    place: 1,
                    year: "2021",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 2,
                    },
                    place: 7,
                    year: "2020",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 5,
                    },
                    place: 6,
                    year: "2020",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 9,
                    },
                    place: 0,
                    year: "2022",
                  },
                ],
                winPercentage: 1707,
                placePercentage: 4268,
                earningsPerStart: 2598221,
                startPoints: 2609,
              },
              lastFiveStarts: {
                averageOdds: 2295,
              },
            },
            pedigree: {
              father: {
                id: 195521,
                name: "Enjoy Lavec",
              },
              mother: {
                id: 681460,
                name: "Spring Skandal",
                nationality: "US",
              },
              grandfather: {
                id: 494729,
                name: "Conway Hall",
                nationality: "CA",
              },
            },
          },
          driver: {
            id: 181913,
            firstName: "Conrad",
            lastName: "Lugauer",
            shortName: "Lug Co",
            location: "Blentarp",
            birth: 1974,
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            license: "A-tränare: träna, köra",
            silks: "Mörkblå, vit/gul hängslen; mörkblå",
            statistics: {
              years: {
                "2022": {
                  starts: 341,
                  earnings: 694937500,
                  placement: {
                    "1": 60,
                    "2": 43,
                    "3": 33,
                  },
                  winPercentage: 1759,
                },
                "2023": {
                  starts: 154,
                  earnings: 440325000,
                  placement: {
                    "1": 44,
                    "2": 18,
                    "3": 19,
                  },
                  winPercentage: 2857,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 12,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 0,
            },
            galloped: true,
            prizeMoney: 2500,
            finalOdds: 18.34,
            startNumber: 15,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1834,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 444,
              maxOdds: 444,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 403,
              potentialPayout: {
                value: 35500,
              },
            },
          },
          videos: [
            {
              mediaId: "1395458629080",
              timestamp: "2023-05-27T14:02:18",
            },
          ],
        },
      ],
      starts: [
        {
          number: 1,
          postPosition: 1,
          distance: 2140,
          horse: {
            id: 760035,
            name: "Ultra Violet",
            age: 6,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 0,
              },
            },
            trainer: {
              id: 149226,
              firstName: "André",
              lastName: "Eklundh",
              shortName: "Ekl An",
              location: "Nossebro",
              birth: 1986,
              homeTrack: {
                id: 6,
                name: "Åby",
              },
              license: "A-tränare: träna, köra",
              silks: "Vit, mblå stolpar och ärmb. vit axelp.; vi",
              statistics: {
                years: {
                  "2022": {
                    starts: 324,
                    earnings: 489562500,
                    placement: {
                      "1": 67,
                      "2": 41,
                      "3": 34,
                    },
                    winPercentage: 2067,
                  },
                  "2023": {
                    starts: 86,
                    earnings: 135020000,
                    placement: {
                      "1": 22,
                      "2": 17,
                      "3": 6,
                    },
                    winPercentage: 2558,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 400900,
            color: "fux",
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            owner: {
              id: 784024,
              name: "Jonsson Rolf",
              location: "Stenungsund",
            },
            breeder: {
              id: 738374,
              name: "Top Of Europe Management AB & Djuve A",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 6,
                  earnings: 5650000,
                  placement: {
                    "1": 0,
                    "2": 1,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 4,
                      },
                      place: 5,
                    },
                  ],
                },
                "2023": {
                  starts: 4,
                  earnings: 17150000,
                  placement: {
                    "1": 3,
                    "2": 0,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 1,
                      },
                      place: 1,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 0,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 23,
                earnings: 40090000,
                placement: {
                  "1": 5,
                  "2": 3,
                  "3": 4,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 1,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2021",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 4,
                    },
                    place: 3,
                    year: "2021",
                  },
                ],
                winPercentage: 2173,
                placePercentage: 5217,
                earningsPerStart: 1743043,
                startPoints: 2695,
              },
              lastFiveStarts: {
                averageOdds: 903,
              },
            },
            pedigree: {
              father: {
                id: 721257,
                name: "Readly Express",
              },
              mother: {
                id: 661119,
                name: "Blend of Gold",
              },
              grandfather: {
                id: 603016,
                name: "Cantab Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 149226,
            firstName: "André",
            lastName: "Eklundh",
            shortName: "Ekl An",
            location: "Nossebro",
            birth: 1986,
            homeTrack: {
              id: 6,
              name: "Åby",
            },
            license: "A-tränare: träna, köra",
            silks: "Vit, mblå stolpar och ärmb. vit axelp.; vi",
            statistics: {
              years: {
                "2022": {
                  starts: 538,
                  earnings: 635920000,
                  placement: {
                    "1": 71,
                    "2": 58,
                    "3": 58,
                  },
                  winPercentage: 1319,
                },
                "2023": {
                  starts: 154,
                  earnings: 149890000,
                  placement: {
                    "1": 21,
                    "2": 21,
                    "3": 13,
                  },
                  winPercentage: 1363,
                },
              },
            },
          },
          result: {
            finishOrder: 44,
            kmTime: {
              code: "u",
            },
            galloped: true,
            disqualified: true,
            prizeMoney: 2500,
            finalOdds: 3,
            startNumber: 1,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 300,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 176,
              maxOdds: 176,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 2812,
              potentialPayout: {
                value: 7800,
              },
            },
          },
          videos: [
            {
              mediaId: "1395459141152",
              timestamp: "2023-05-27T14:04:50",
            },
            {
              mediaId: "1395459141280",
              timestamp: "2023-05-27T14:16:46",
            },
          ],
          out: true,
        },
        {
          number: 2,
          postPosition: 2,
          distance: 2140,
          horse: {
            id: 763967,
            name: "Kit Crown",
            age: 5,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 2,
              },
            },
            trainer: {
              id: 137528,
              firstName: "Öystein",
              lastName: "Tjomsland",
              shortName: "Tjo Öy",
              location: "Norge",
              birth: 1971,
              homeTrack: {
                id: 9,
                name: "Bergsåker",
              },
              license: "A-tränare: (Sv/utland): träna, köra",
              silks: "Gul, svarta sidor och midjeband; svart",
              statistics: {
                years: {
                  "2022": {
                    starts: 352,
                    earnings: 1223585600,
                    placement: {
                      "1": 101,
                      "2": 53,
                      "3": 37,
                    },
                    winPercentage: 2869,
                  },
                  "2023": {
                    starts: 203,
                    earnings: 292888300,
                    placement: {
                      "1": 47,
                      "2": 30,
                      "3": 20,
                    },
                    winPercentage: 2315,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 396300,
            color: "svartbrun",
            homeTrack: {
              id: 9,
              name: "Bergsåker",
            },
            owner: {
              id: 746995,
              name: "Pure Islet AB & Ragnar Bjurfors Gbg AB",
            },
            breeder: {
              id: 712281,
              name: "Sansiro AB",
              location: "Skanör",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 4,
                  earnings: 10500000,
                  placement: {
                    "1": 3,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 7,
                      },
                      place: 2,
                    },
                  ],
                },
                "2023": {
                  starts: 5,
                  earnings: 24400000,
                  placement: {
                    "1": 3,
                    "2": 0,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 0,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 2,
                      },
                      place: 1,
                    },
                  ],
                },
              },
              life: {
                starts: 13,
                earnings: 39630000,
                placement: {
                  "1": 6,
                  "2": 3,
                  "3": 0,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 0,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 2,
                    },
                    place: 1,
                    year: "2023",
                  },
                ],
                winPercentage: 4615,
                placePercentage: 6923,
                earningsPerStart: 3048461,
                startPoints: 3365,
              },
              lastFiveStarts: {
                averageOdds: 559,
              },
            },
            pedigree: {
              father: {
                id: 636691,
                name: "Raja Mirchi",
              },
              mother: {
                id: 717088,
                name: "Reginella Spin",
                nationality: "IT",
              },
              grandfather: {
                id: 603016,
                name: "Cantab Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 53685,
            firstName: "Ulf",
            lastName: "Ohlsson",
            shortName: "Ohl Ul",
            location: "Knivsta",
            birth: 1964,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, vita staplar; vit",
            statistics: {
              years: {
                "2022": {
                  starts: 1890,
                  earnings: 3360750300,
                  placement: {
                    "1": 241,
                    "2": 217,
                    "3": 195,
                  },
                  winPercentage: 1275,
                },
                "2023": {
                  starts: 680,
                  earnings: 897385000,
                  placement: {
                    "1": 100,
                    "2": 79,
                    "3": 63,
                  },
                  winPercentage: 1470,
                },
              },
            },
          },
          result: {
            place: 1,
            finishOrder: 1,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 6,
            },
            prizeMoney: 220000,
            finalOdds: 6.48,
            startNumber: 2,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 648,
              finalOdds: 648,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 256,
              maxOdds: 256,
              odds: 256,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1564,
              potentialPayout: {
                value: 11600,
              },
            },
          },
          videos: [
            {
              mediaId: "1395457605165",
              timestamp: "2023-05-27T14:11:17",
            },
          ],
        },
        {
          number: 3,
          postPosition: 3,
          distance: 2140,
          horse: {
            id: 763805,
            name: "Waytocashflow",
            nationality: "NO",
            age: 6,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 6,
              },
            },
            trainer: {
              id: 149571,
              firstName: "Lars Anvar",
              lastName: "Kolle",
              shortName: "Kol LA",
              location: "Norge",
              birth: 1970,
              license: "A-tränare (utland): träna, köra",
              silks: "Mörkblå, grått fält och ärmbindel; mblå",
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
              },
              back: {
                hasShoe: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 416326,
            color: "brun",
            owner: {
              id: 226009,
              name: "Brekke Björn & Gunvor S.",
              location: "Norge",
            },
            breeder: {
              id: 779818,
              name: "Björn & Gunvor Brekke",
              location: "Norge",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 11,
                  earnings: 15139300,
                  placement: {
                    "1": 2,
                    "2": 2,
                    "3": 3,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 1,
                      },
                      place: 3,
                    },
                  ],
                },
                "2023": {
                  starts: 7,
                  earnings: 17867100,
                  placement: {
                    "1": 3,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 3,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 6,
                      },
                      place: 0,
                    },
                  ],
                },
              },
              life: {
                starts: 29,
                earnings: 41632600,
                placement: {
                  "1": 7,
                  "2": 4,
                  "3": 5,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 1,
                    },
                    place: 3,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 6,
                    },
                    place: 1,
                    year: "2023",
                  },
                ],
                winPercentage: 2413,
                placePercentage: 5517,
                earningsPerStart: 1435606,
                startPoints: 1929,
              },
              lastFiveStarts: {
                averageOdds: 1253,
              },
            },
            pedigree: {
              father: {
                id: 721257,
                name: "Readly Express",
              },
              mother: {
                id: 752611,
                name: "Way Va Bene",
                nationality: "NO",
              },
              grandfather: {
                id: 594465,
                name: "Broadway Hall",
                nationality: "US",
              },
            },
            foreignOwned: true,
          },
          driver: {
            id: 149571,
            firstName: "Lars Anvar",
            lastName: "Kolle",
            shortName: "Kol LA",
            location: "Norge",
            birth: 1970,
            license: "A-tränare (utland): träna, köra",
            silks: "Mörkblå, grått fält och ärmbindel; mblå",
            statistics: {
              years: {
                "2022": {
                  starts: 26,
                  earnings: 78720000,
                  placement: {
                    "1": 5,
                    "2": 5,
                    "3": 4,
                  },
                  winPercentage: 1923,
                },
                "2023": {
                  starts: 17,
                  earnings: 15898800,
                  placement: {
                    "1": 3,
                    "2": 3,
                    "3": 3,
                  },
                  winPercentage: 1764,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 11,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 2,
            },
            prizeMoney: 2500,
            finalOdds: 44.84,
            startNumber: 3,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 4484,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1025,
              maxOdds: 1025,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 186,
              potentialPayout: {
                value: 75800,
              },
            },
          },
          videos: [
            {
              mediaId: "1395464261148",
              timestamp: "2023-05-27T14:38:18",
            },
            {
              mediaId: "1395464773245",
              timestamp: "2023-05-27T14:49:05",
            },
            {
              mediaId: "1395466309114",
              timestamp: "2023-05-27T14:58:53",
            },
          ],
        },
        {
          number: 4,
          postPosition: 4,
          distance: 2140,
          horse: {
            id: 764909,
            name: "Ballerina Indika",
            age: 5,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 5,
              },
            },
            trainer: {
              id: 608305,
              firstName: "Jörgen S",
              lastName: "Eriksson",
              shortName: "Eri JS",
              location: "Eskilstuna",
              birth: 1987,
              homeTrack: {
                id: 14,
                name: "Eskilstuna",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart/vröd, diagonalt delad, ärmb; sv",
              statistics: {
                years: {
                  "2022": {
                    starts: 294,
                    earnings: 466258300,
                    placement: {
                      "1": 53,
                      "2": 49,
                      "3": 37,
                    },
                    winPercentage: 1802,
                  },
                  "2023": {
                    starts: 114,
                    earnings: 188334500,
                    placement: {
                      "1": 20,
                      "2": 16,
                      "3": 13,
                    },
                    winPercentage: 1754,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: true,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 486324,
            color: "brun",
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            owner: {
              id: 134918,
              name: "Easy KB",
              location: "Uppsala",
            },
            breeder: {
              id: 225393,
              name: "Axelsson Kåre",
              location: "Lindesberg",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 11,
                  earnings: 32800000,
                  placement: {
                    "1": 5,
                    "2": 3,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 5,
                      },
                      place: 1,
                    },
                  ],
                },
                "2023": {
                  starts: 4,
                  earnings: 10342400,
                  placement: {
                    "1": 0,
                    "2": 2,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 0,
                      },
                      place: 4,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 5,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 23,
                earnings: 48632400,
                placement: {
                  "1": 6,
                  "2": 5,
                  "3": 0,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 5,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 2,
                    },
                    place: 4,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 5,
                    },
                    place: 2,
                    year: "2023",
                  },
                ],
                winPercentage: 2608,
                placePercentage: 4782,
                earningsPerStart: 2114452,
                startPoints: 1834,
              },
              lastFiveStarts: {
                averageOdds: 531,
              },
            },
            pedigree: {
              father: {
                id: 588796,
                name: "Maharajah",
              },
              mother: {
                id: 720039,
                name: "Cash Queen Indika",
              },
              grandfather: {
                id: 667295,
                name: "Ready Cash",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 20055,
            firstName: "Åke",
            lastName: "Svanstedt",
            shortName: "Sva Åk",
            location: "Usa",
            birth: 1958,
            license: "A-tränare (utland): träna, köra",
            silks: "Grön, vit ruta; vit",
          },
          result: {
            place: 6,
            finishOrder: 6,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 9,
            },
            prizeMoney: 15000,
            finalOdds: 37.12,
            startNumber: 4,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 3712,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 816,
              maxOdds: 816,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 187,
              potentialPayout: {
                value: 72600,
              },
            },
          },
          videos: [
            {
              mediaId: "1395458117329",
              timestamp: "2023-05-27T14:13:38",
            },
            {
              mediaId: "1395460165204",
              timestamp: "2023-05-27T14:03:03",
            },
          ],
        },
        {
          number: 5,
          postPosition: 5,
          distance: 2140,
          horse: {
            id: 766762,
            name: "Roubine",
            age: 5,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 6,
              },
            },
            trainer: {
              id: 161607,
              firstName: "Björn",
              lastName: "Goop",
              shortName: "Goo Bj",
              location: "Karlstad",
              birth: 1976,
              homeTrack: {
                id: 15,
                name: "Färjestad",
              },
              license: "A-tränare: (Sv/utland): träna, köra",
              silks: "Mblå, guldf.midjeband, sömmar; guld",
              statistics: {
                years: {
                  "2022": {
                    starts: 1124,
                    earnings: 2204123200,
                    placement: {
                      "1": 158,
                      "2": 137,
                      "3": 127,
                    },
                    winPercentage: 1405,
                  },
                  "2023": {
                    starts: 400,
                    earnings: 754169400,
                    placement: {
                      "1": 53,
                      "2": 38,
                      "3": 40,
                    },
                    winPercentage: 1325,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 504000,
            color: "mörkbrun",
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            owner: {
              id: 667869,
              name: "Onkel Invest Oy",
              location: "Finland",
            },
            breeder: {
              id: 667869,
              name: "Onkel Invest Oy",
              location: "Finland",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 10,
                  earnings: 9950000,
                  placement: {
                    "1": 0,
                    "2": 2,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 5,
                      },
                      place: 5,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 6,
                      },
                      place: 2,
                    },
                  ],
                },
                "2023": {
                  starts: 6,
                  earnings: 9850000,
                  placement: {
                    "1": 0,
                    "2": 1,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 5,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 0,
                      },
                      place: 8,
                    },
                  ],
                },
              },
              life: {
                starts: 27,
                earnings: 50400000,
                placement: {
                  "1": 1,
                  "2": 8,
                  "3": 4,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 5,
                    },
                    place: 5,
                    year: "2022",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 6,
                    },
                    place: 5,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 6,
                    },
                    place: 2,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 7,
                    },
                    place: 3,
                    year: "2023",
                  },
                ],
                winPercentage: 370,
                placePercentage: 4814,
                earningsPerStart: 1866666,
                startPoints: 785,
              },
              lastFiveStarts: {
                averageOdds: 1593,
              },
            },
            pedigree: {
              father: {
                id: 667295,
                name: "Ready Cash",
                nationality: "FR",
              },
              mother: {
                id: 731077,
                name: "Unique Kronos",
              },
              grandfather: {
                id: 463269,
                name: "Varenne",
                nationality: "IT",
              },
            },
          },
          driver: {
            id: 161607,
            firstName: "Björn",
            lastName: "Goop",
            shortName: "Goo Bj",
            location: "Karlstad",
            birth: 1976,
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            license: "A-tränare: (Sv/utland): träna, köra",
            silks: "Mblå, guldf.midjeband, sömmar; guld",
            statistics: {
              years: {
                "2022": {
                  starts: 1260,
                  earnings: 4030146900,
                  placement: {
                    "1": 194,
                    "2": 167,
                    "3": 139,
                  },
                  winPercentage: 1539,
                },
                "2023": {
                  starts: 388,
                  earnings: 1036036000,
                  placement: {
                    "1": 59,
                    "2": 50,
                    "3": 36,
                  },
                  winPercentage: 1520,
                },
              },
            },
          },
          result: {
            finishOrder: 45,
            kmTime: {
              code: "u",
            },
            galloped: true,
            disqualified: true,
            prizeMoney: 2500,
            finalOdds: 24.54,
            startNumber: 5,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 2454,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 623,
              maxOdds: 623,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 313,
              potentialPayout: {
                value: 44400,
              },
            },
          },
          videos: [
            {
              mediaId: "1395456581252",
              timestamp: "2023-05-27T14:04:50",
            },
          ],
          out: true,
        },
        {
          number: 6,
          postPosition: 6,
          distance: 2140,
          horse: {
            id: 772097,
            name: "Pam Trot",
            age: 4,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 5,
              },
            },
            trainer: {
              id: 578549,
              firstName: "Giuseppe",
              lastName: "Lubrano",
              shortName: "Lub Gi",
              location: "Halmstad",
              birth: 1981,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "A-tränare: träna, köra",
              silks: "Vit, ljusblå sidor och ärmar; vit",
              statistics: {
                years: {
                  "2022": {
                    starts: 143,
                    earnings: 147510000,
                    placement: {
                      "1": 15,
                      "2": 16,
                      "3": 18,
                    },
                    winPercentage: 1048,
                  },
                  "2023": {
                    starts: 39,
                    earnings: 53390000,
                    placement: {
                      "1": 2,
                      "2": 8,
                      "3": 8,
                    },
                    winPercentage: 512,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 399800,
            color: "brun",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 787635,
              name: "Stråvalla Gård AB",
              location: "Kullavik",
            },
            breeder: {
              id: 568215,
              name: "Karlsson Ove",
              location: "Fjugesta",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 16,
                  earnings: 29500000,
                  placement: {
                    "1": 3,
                    "2": 2,
                    "3": 4,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 9,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 5,
                      },
                      place: 1,
                    },
                  ],
                },
                "2023": {
                  starts: 4,
                  earnings: 10480000,
                  placement: {
                    "1": 0,
                    "2": 1,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aL",
                      startMethod: "auto",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 4,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 6,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 20,
                earnings: 39980000,
                placement: {
                  "1": 3,
                  "2": 3,
                  "3": 6,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 9,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 2,
                    },
                    place: 6,
                    year: "2022",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 4,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 6,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 5,
                    },
                    place: 1,
                    year: "2022",
                  },
                ],
                winPercentage: 1500,
                placePercentage: 6000,
                earningsPerStart: 1999000,
                startPoints: 2168,
              },
              lastFiveStarts: {
                averageOdds: 1637,
              },
            },
            pedigree: {
              father: {
                id: 647694,
                name: "Panne de Moteur",
              },
              mother: {
                id: 739156,
                name: "Give 'n Take U.S.",
                nationality: "US",
              },
              grandfather: {
                id: 603016,
                name: "Cantab Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 578549,
            firstName: "Giuseppe",
            lastName: "Lubrano",
            shortName: "Lub Gi",
            location: "Halmstad",
            birth: 1981,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "A-tränare: träna, köra",
            silks: "Vit, ljusblå sidor och ärmar; vit",
            statistics: {
              years: {
                "2022": {
                  starts: 90,
                  earnings: 85280000,
                  placement: {
                    "1": 6,
                    "2": 7,
                    "3": 11,
                  },
                  winPercentage: 666,
                },
                "2023": {
                  starts: 31,
                  earnings: 42550000,
                  placement: {
                    "1": 1,
                    "2": 6,
                    "3": 6,
                  },
                  winPercentage: 322,
                },
              },
            },
          },
          result: {
            place: 2,
            finishOrder: 2,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 7,
            },
            prizeMoney: 110000,
            finalOdds: 52.54,
            startNumber: 6,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 5254,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 949,
              maxOdds: 949,
              odds: 949,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 119,
              potentialPayout: {
                value: 105900,
              },
            },
          },
          videos: [
            {
              mediaId: "1395458117128",
              timestamp: "2023-05-27T14:03:24",
            },
            {
              mediaId: "1395458629301",
              timestamp: "2023-05-27T14:15:05",
            },
            {
              mediaId: "1395459141471",
              timestamp: "2023-05-27T14:24:07",
            },
          ],
        },
        {
          number: 7,
          postPosition: 7,
          distance: 2140,
          horse: {
            id: 763603,
            name: "Toscana Southwind",
            age: 5,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 3,
              },
            },
            trainer: {
              id: 529886,
              firstName: "Troels",
              lastName: "Andersen",
              shortName: "And Tr",
              location: "Tärnsjö",
              birth: 1980,
              homeTrack: {
                id: 16,
                name: "Gävle",
              },
              license: "A-tränare: träna, köra",
              silks: "Mblå, vit fält och silver romber axelp; mb",
              statistics: {
                years: {
                  "2022": {
                    starts: 137,
                    earnings: 155793500,
                    placement: {
                      "1": 16,
                      "2": 16,
                      "3": 14,
                    },
                    winPercentage: 1167,
                  },
                  "2023": {
                    starts: 25,
                    earnings: 26820000,
                    placement: {
                      "1": 4,
                      "2": 4,
                      "3": 1,
                    },
                    winPercentage: 1600,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: true,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 296000,
            color: "mörkbrun",
            homeTrack: {
              id: 16,
              name: "Gävle",
            },
            owner: {
              id: 780634,
              name: "Dala-Dala AB & S. Hansen Vet.prakt.AB",
            },
            breeder: {
              id: 165626,
              name: "Höglund Jan-Eric & Lisbet",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 7,
                  earnings: 13300000,
                  placement: {
                    "1": 5,
                    "2": 0,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 2,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 16,
                        tenths: 6,
                      },
                      place: 1,
                    },
                  ],
                },
                "2023": {
                  starts: 7,
                  earnings: 15650000,
                  placement: {
                    "1": 2,
                    "2": 2,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 5,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 3,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 16,
                earnings: 29600000,
                placement: {
                  "1": 7,
                  "2": 2,
                  "3": 2,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 2,
                    },
                    place: 0,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 3,
                    },
                    place: 2,
                    year: "2023",
                  },
                ],
                winPercentage: 4375,
                placePercentage: 6875,
                earningsPerStart: 1850000,
                startPoints: 1865,
              },
              lastFiveStarts: {
                averageOdds: 517,
              },
            },
            pedigree: {
              father: {
                id: 741746,
                name: "Bold Eagle",
                nationality: "FR",
              },
              mother: {
                id: 682831,
                name: "Coco Chip",
                nationality: "US",
              },
              grandfather: {
                id: 565947,
                name: "Chip Chip Hooray",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 529886,
            firstName: "Troels",
            lastName: "Andersen",
            shortName: "And Tr",
            location: "Tärnsjö",
            birth: 1980,
            homeTrack: {
              id: 16,
              name: "Gävle",
            },
            license: "A-tränare: träna, köra",
            silks: "Mblå, vit fält och silver romber axelp; mb",
            statistics: {
              years: {
                "2022": {
                  starts: 153,
                  earnings: 151203500,
                  placement: {
                    "1": 19,
                    "2": 14,
                    "3": 14,
                  },
                  winPercentage: 1241,
                },
                "2023": {
                  starts: 20,
                  earnings: 21840000,
                  placement: {
                    "1": 3,
                    "2": 3,
                    "3": 1,
                  },
                  winPercentage: 1500,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 10,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 1,
            },
            prizeMoney: 2500,
            finalOdds: 14.67,
            startNumber: 7,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1467,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 402,
              maxOdds: 402,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 583,
              potentialPayout: {
                value: 27300,
              },
            },
          },
          videos: [
            {
              mediaId: "1395445829447",
              timestamp: "2023-05-27T13:28:09",
            },
            {
              mediaId: "1395452997115",
              timestamp: "2023-05-27T13:39:32",
            },
            {
              mediaId: "1395455557359",
              timestamp: "2023-05-27T13:49:06",
            },
          ],
        },
        {
          number: 8,
          postPosition: 8,
          distance: 2140,
          horse: {
            id: 774317,
            name: "Future Sox",
            age: 4,
            sex: "mare",
            record: {
              code: "L",
              startMethod: "volte",
              distance: "long",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 6,
              },
            },
            trainer: {
              id: 608305,
              firstName: "Jörgen S",
              lastName: "Eriksson",
              shortName: "Eri JS",
              location: "Eskilstuna",
              birth: 1987,
              homeTrack: {
                id: 14,
                name: "Eskilstuna",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart/vröd, diagonalt delad, ärmb; sv",
              statistics: {
                years: {
                  "2022": {
                    starts: 294,
                    earnings: 466258300,
                    placement: {
                      "1": 53,
                      "2": 49,
                      "3": 37,
                    },
                    winPercentage: 1802,
                  },
                  "2023": {
                    starts: 114,
                    earnings: 188334500,
                    placement: {
                      "1": 20,
                      "2": 16,
                      "3": 13,
                    },
                    winPercentage: 1754,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: true,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 367824,
            color: "brun",
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            owner: {
              id: 829652,
              name: "Team EvaKarin - OfCourse",
            },
            breeder: {
              id: 758746,
              name: "Boholm Joakim & Mitchell Craig",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 9,
                  earnings: 13820000,
                  placement: {
                    "1": 2,
                    "2": 0,
                    "3": 3,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 4,
                      },
                      place: 1,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 17,
                        tenths: 5,
                      },
                      place: 3,
                    },
                  ],
                },
                "2023": {
                  starts: 6,
                  earnings: 22962400,
                  placement: {
                    "1": 1,
                    "2": 4,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 9,
                      },
                      place: 5,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 6,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 15,
                earnings: 36782400,
                placement: {
                  "1": 3,
                  "2": 4,
                  "3": 3,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 9,
                    },
                    place: 5,
                    year: "2023",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 18,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 1,
                    },
                    place: 1,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 6,
                    },
                    place: 2,
                    year: "2023",
                  },
                ],
                winPercentage: 2000,
                placePercentage: 6666,
                earningsPerStart: 2452160,
                startPoints: 2921,
              },
              lastFiveStarts: {
                averageOdds: 2192,
              },
            },
            pedigree: {
              father: {
                id: 741746,
                name: "Bold Eagle",
                nationality: "FR",
              },
              mother: {
                id: 754352,
                name: "Moni Sox",
                nationality: "US",
              },
              grandfather: {
                id: 702857,
                name: "Explosive Matter",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 608305,
            firstName: "Jörgen S",
            lastName: "Eriksson",
            shortName: "Eri JS",
            location: "Eskilstuna",
            birth: 1987,
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart/vröd, diagonalt delad, ärmb; sv",
            statistics: {
              years: {
                "2022": {
                  starts: 260,
                  earnings: 405328300,
                  placement: {
                    "1": 40,
                    "2": 40,
                    "3": 31,
                  },
                  winPercentage: 1538,
                },
                "2023": {
                  starts: 95,
                  earnings: 139065900,
                  placement: {
                    "1": 12,
                    "2": 13,
                    "3": 11,
                  },
                  winPercentage: 1263,
                },
              },
            },
          },
          result: {
            place: 4,
            finishOrder: 4,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 8,
            },
            prizeMoney: 35000,
            finalOdds: 19.29,
            startNumber: 8,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1929,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 406,
              maxOdds: 406,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 470,
              potentialPayout: {
                value: 30600,
              },
            },
          },
          videos: [
            {
              mediaId: "1395459653407",
              timestamp: "2023-05-27T14:29:23",
            },
            {
              mediaId: "1395464261164",
              timestamp: "2023-05-27T14:39:31",
            },
            {
              mediaId: "1395464773272",
              timestamp: "2023-05-27T14:49:53",
            },
          ],
        },
        {
          number: 9,
          postPosition: 9,
          distance: 2140,
          horse: {
            id: 767363,
            name: "Classy Knox",
            age: 5,
            sex: "mare",
            record: {
              code: "K",
              startMethod: "volte",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 7,
              },
            },
            trainer: {
              id: 86024,
              firstName: "Håkan K",
              lastName: "Persson",
              shortName: "Per HK",
              location: "Falkenberg",
              birth: 1968,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "A-tränare: träna, köra",
              silks: "Vinröd, beige/vit/svart axelsk; vinröd",
              statistics: {
                years: {
                  "2022": {
                    starts: 259,
                    earnings: 353098300,
                    placement: {
                      "1": 31,
                      "2": 35,
                      "3": 34,
                    },
                    winPercentage: 1196,
                  },
                  "2023": {
                    starts: 79,
                    earnings: 125373800,
                    placement: {
                      "1": 16,
                      "2": 11,
                      "3": 7,
                    },
                    winPercentage: 2025,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 446650,
            color: "brun",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 807894,
              name: "Stall Flintstone - Easy",
            },
            breeder: {
              id: 222875,
              name: "Arvenberg Björn",
              location: "Söderala",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 11,
                  earnings: 16175000,
                  placement: {
                    "1": 1,
                    "2": 4,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 0,
                      },
                      place: 7,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 6,
                      },
                      place: 2,
                    },
                  ],
                },
                "2023": {
                  starts: 6,
                  earnings: 18900000,
                  placement: {
                    "1": 2,
                    "2": 0,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 0,
                      },
                      place: 3,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 7,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 22,
                earnings: 44665000,
                placement: {
                  "1": 4,
                  "2": 5,
                  "3": 4,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 0,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 9,
                    },
                    place: 5,
                    year: "2022",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 7,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 6,
                    },
                    place: 2,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 8,
                    },
                    place: 6,
                    year: "2023",
                  },
                ],
                winPercentage: 1818,
                placePercentage: 5909,
                earningsPerStart: 2030227,
                startPoints: 2040,
              },
              lastFiveStarts: {
                averageOdds: 1484,
              },
            },
            pedigree: {
              father: {
                id: 740136,
                name: "Uncle Lasse",
                nationality: "US",
              },
              mother: {
                id: 701241,
                name: "Classy Credit",
                nationality: "US",
              },
              grandfather: {
                id: 501073,
                name: "Credit Winner",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 145716,
            firstName: "Stefan",
            lastName: "Persson",
            shortName: "Per St",
            location: "Halmstad",
            birth: 1973,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, ljusblå sidor; svart",
            statistics: {
              years: {
                "2022": {
                  starts: 1283,
                  earnings: 1884680900,
                  placement: {
                    "1": 179,
                    "2": 160,
                    "3": 148,
                  },
                  winPercentage: 1395,
                },
                "2023": {
                  starts: 613,
                  earnings: 822739500,
                  placement: {
                    "1": 82,
                    "2": 67,
                    "3": 76,
                  },
                  winPercentage: 1337,
                },
              },
            },
          },
          result: {
            place: 7,
            finishOrder: 7,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 9,
            },
            prizeMoney: 10000,
            finalOdds: 16.97,
            startNumber: 9,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1697,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 431,
              maxOdds: 431,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 305,
              potentialPayout: {
                value: 44600,
              },
            },
          },
        },
        {
          number: 10,
          postPosition: 10,
          distance: 2140,
          horse: {
            id: 768540,
            name: "Queen",
            age: 5,
            sex: "mare",
            record: {
              code: "K",
              startMethod: "volte",
              distance: "short",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 4,
              },
            },
            trainer: {
              id: 161607,
              firstName: "Björn",
              lastName: "Goop",
              shortName: "Goo Bj",
              location: "Karlstad",
              birth: 1976,
              homeTrack: {
                id: 15,
                name: "Färjestad",
              },
              license: "A-tränare: (Sv/utland): träna, köra",
              silks: "Mblå, guldf.midjeband, sömmar; guld",
              statistics: {
                years: {
                  "2022": {
                    starts: 1124,
                    earnings: 2204123200,
                    placement: {
                      "1": 158,
                      "2": 137,
                      "3": 127,
                    },
                    winPercentage: 1405,
                  },
                  "2023": {
                    starts: 400,
                    earnings: 754169400,
                    placement: {
                      "1": 53,
                      "2": 38,
                      "3": 40,
                    },
                    winPercentage: 1325,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: true,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 422900,
            color: "mörkbrun",
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            owner: {
              id: 709337,
              name: "Fairlane Trotting HB",
              location: "Vimmerby",
            },
            breeder: {
              id: 462401,
              name: "Goop Annika",
              location: "Kil",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 9,
                  earnings: 15300000,
                  placement: {
                    "1": 2,
                    "2": 1,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 8,
                      },
                      place: 4,
                    },
                    {
                      code: "K",
                      startMethod: "volte",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 4,
                      },
                      place: 4,
                    },
                  ],
                },
                "2023": {
                  starts: 7,
                  earnings: 18840000,
                  placement: {
                    "1": 0,
                    "2": 1,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 0,
                      },
                      place: 3,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 2,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 20,
                earnings: 42290000,
                placement: {
                  "1": 3,
                  "2": 3,
                  "3": 3,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 8,
                    },
                    place: 3,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 0,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 4,
                    },
                    place: 4,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 2,
                    },
                    place: 3,
                    year: "2023",
                  },
                ],
                winPercentage: 1500,
                placePercentage: 4500,
                earningsPerStart: 2114500,
                startPoints: 1939,
              },
              lastFiveStarts: {
                averageOdds: 1532,
              },
            },
            pedigree: {
              father: {
                id: 463269,
                name: "Varenne",
                nationality: "IT",
              },
              mother: {
                id: 716819,
                name: "Claudia B.R.",
                nationality: "NO",
              },
              grandfather: {
                id: 543528,
                name: "Dream Vacation",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 43521,
            firstName: "Carl Johan",
            lastName: "Jepson",
            shortName: "Jep CJ",
            location: "Karlstad",
            birth: 1977,
            homeTrack: {
              id: 15,
              name: "Färjestad",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, mörkblå axelparti; mblå",
            statistics: {
              years: {
                "2022": {
                  starts: 1190,
                  earnings: 1785508600,
                  placement: {
                    "1": 169,
                    "2": 143,
                    "3": 146,
                  },
                  winPercentage: 1420,
                },
                "2023": {
                  starts: 468,
                  earnings: 702016800,
                  placement: {
                    "1": 66,
                    "2": 55,
                    "3": 49,
                  },
                  winPercentage: 1410,
                },
              },
            },
          },
          result: {
            place: 8,
            finishOrder: 8,
            kmTime: {
              minutes: 1,
              seconds: 14,
              tenths: 1,
            },
            prizeMoney: 6000,
            finalOdds: 35.92,
            startNumber: 10,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 3592,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 651,
              maxOdds: 651,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 179,
              potentialPayout: {
                value: 81600,
              },
            },
          },
          videos: [
            {
              mediaId: "1395457093398",
              timestamp: "2023-05-27T14:04:18",
            },
          ],
        },
        {
          number: 11,
          postPosition: 1,
          distance: 2160,
          horse: {
            id: 755587,
            name: "Marabou Brodda",
            age: 6,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 14,
                tenths: 0,
              },
            },
            trainer: {
              id: 56965,
              firstName: "Thomas",
              lastName: "Uhrberg",
              shortName: "Uhr Th",
              location: "Munka-Ljungby",
              birth: 1961,
              homeTrack: {
                id: 7,
                name: "Jägersro",
              },
              license: "A-tränare: träna, köra",
              silks: "Grön, vitt axelparti, vinkel och ärmr; vit",
              statistics: {
                years: {
                  "2022": {
                    starts: 201,
                    earnings: 342591800,
                    placement: {
                      "1": 27,
                      "2": 30,
                      "3": 19,
                    },
                    winPercentage: 1343,
                  },
                  "2023": {
                    starts: 58,
                    earnings: 138032000,
                    placement: {
                      "1": 12,
                      "2": 11,
                      "3": 6,
                    },
                    winPercentage: 2068,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: true,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 774164,
            color: "svartbrun",
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            owner: {
              id: 783554,
              name: "Pekean AB",
              location: "Askim",
            },
            breeder: {
              id: 230444,
              name: "Brodda Stuteri AB",
              location: "Skurup",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 12,
                  earnings: 21716400,
                  placement: {
                    "1": 4,
                    "2": 3,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 0,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 3,
                      },
                      place: 1,
                    },
                  ],
                },
                "2023": {
                  starts: 6,
                  earnings: 53200000,
                  placement: {
                    "1": 3,
                    "2": 2,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 1,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 0,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 19,
                earnings: 77416400,
                placement: {
                  "1": 8,
                  "2": 5,
                  "3": 1,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 0,
                    },
                    place: 2,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 1,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 0,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 7,
                    },
                    place: 2,
                    year: "2022",
                  },
                ],
                winPercentage: 4210,
                placePercentage: 7368,
                earningsPerStart: 4074547,
                startPoints: 5220,
              },
              lastFiveStarts: {
                averageOdds: 557,
              },
            },
            pedigree: {
              father: {
                id: 581297,
                name: "Chocolatier",
                nationality: "US",
              },
              mother: {
                id: 731895,
                name: "Miami Brodda",
              },
              grandfather: {
                id: 698406,
                name: "The Best Madrik",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 56965,
            firstName: "Thomas",
            lastName: "Uhrberg",
            shortName: "Uhr Th",
            location: "Munka-Ljungby",
            birth: 1961,
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            license: "A-tränare: träna, köra",
            silks: "Grön, vitt axelparti, vinkel och ärmr; vit",
            statistics: {
              years: {
                "2022": {
                  starts: 503,
                  earnings: 816424200,
                  placement: {
                    "1": 64,
                    "2": 64,
                    "3": 57,
                  },
                  winPercentage: 1272,
                },
                "2023": {
                  starts: 219,
                  earnings: 365487600,
                  placement: {
                    "1": 31,
                    "2": 31,
                    "3": 30,
                  },
                  winPercentage: 1415,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 9,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 4,
            },
            prizeMoney: 2500,
            finalOdds: 6.74,
            startNumber: 11,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 674,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 239,
              maxOdds: 239,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1412,
              potentialPayout: {
                value: 13200,
              },
            },
          },
          videos: [
            {
              mediaId: "1395458117127",
              timestamp: "2023-05-27T14:02:23",
            },
            {
              mediaId: "1395458117327",
              timestamp: "2023-05-27T14:13:28",
            },
          ],
        },
        {
          number: 12,
          postPosition: 2,
          distance: 2160,
          horse: {
            id: 759866,
            name: "Precious Lane",
            age: 6,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 4,
              },
            },
            trainer: {
              id: 549496,
              firstName: "Johan",
              lastName: "Untersteiner",
              shortName: "Unt Jo",
              location: "Holm",
              birth: 1984,
              homeTrack: {
                id: 18,
                name: "Halmstad",
              },
              license: "A-tränare: träna, köra",
              silks: "Svart, vit/röda axelklaffar; svart",
              statistics: {
                years: {
                  "2022": {
                    starts: 1292,
                    earnings: 2740982900,
                    placement: {
                      "1": 237,
                      "2": 161,
                      "3": 146,
                    },
                    winPercentage: 1834,
                  },
                  "2023": {
                    starts: 427,
                    earnings: 914457400,
                    placement: {
                      "1": 95,
                      "2": 70,
                      "3": 47,
                    },
                    winPercentage: 2224,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: false,
              },
              back: {
                hasShoe: false,
                changed: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: true,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 716426,
            color: "svart",
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            owner: {
              id: 556348,
              name: "Levaux AB",
              location: "Limhamn",
            },
            breeder: {
              id: 248206,
              name: "Prestera International AB",
              location: "Limhamn",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 17,
                  earnings: 21880000,
                  placement: {
                    "1": 3,
                    "2": 2,
                    "3": 3,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 1,
                      },
                      place: 2,
                    },
                    {
                      code: "L",
                      startMethod: "volte",
                      distance: "long",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 1,
                      },
                      place: 2,
                    },
                  ],
                },
                "2023": {
                  starts: 8,
                  earnings: 21142600,
                  placement: {
                    "1": 1,
                    "2": 0,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 14,
                        tenths: 2,
                      },
                      place: 6,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 4,
                      },
                      place: 3,
                    },
                  ],
                },
              },
              life: {
                starts: 42,
                earnings: 71642600,
                placement: {
                  "1": 7,
                  "2": 10,
                  "3": 6,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 0,
                    },
                    place: 7,
                    year: "2021",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 8,
                    },
                    place: 2,
                    year: "2021",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 0,
                    },
                    place: 4,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 4,
                    },
                    place: 3,
                    year: "2023",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 1,
                    },
                    place: 2,
                    year: "2022",
                  },
                ],
                winPercentage: 1666,
                placePercentage: 5476,
                earningsPerStart: 1705776,
                startPoints: 1174,
              },
              lastFiveStarts: {
                averageOdds: 1396,
              },
            },
            pedigree: {
              father: {
                id: 581297,
                name: "Chocolatier",
                nationality: "US",
              },
              mother: {
                id: 749356,
                name: "Sweet Grif Italia",
                nationality: "IT",
              },
              grandfather: {
                id: 568973,
                name: "Andover Hall",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 549496,
            firstName: "Johan",
            lastName: "Untersteiner",
            shortName: "Unt Jo",
            location: "Holm",
            birth: 1984,
            homeTrack: {
              id: 18,
              name: "Halmstad",
            },
            license: "A-tränare: träna, köra",
            silks: "Svart, vit/röda axelklaffar; svart",
            statistics: {
              years: {
                "2022": {
                  starts: 823,
                  earnings: 1831202700,
                  placement: {
                    "1": 149,
                    "2": 111,
                    "3": 86,
                  },
                  winPercentage: 1810,
                },
                "2023": {
                  starts: 293,
                  earnings: 698040000,
                  placement: {
                    "1": 74,
                    "2": 44,
                    "3": 30,
                  },
                  winPercentage: 2525,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 13,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 7,
            },
            prizeMoney: 2500,
            finalOdds: 93.67,
            startNumber: 12,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 9367,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 1741,
              maxOdds: 1741,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 60,
              potentialPayout: {
                value: 217100,
              },
            },
          },
          videos: [
            {
              mediaId: "1395456069489",
              timestamp: "2023-05-27T14:01:34",
            },
            {
              mediaId: "1395458117475",
              timestamp: "2023-05-27T14:21:24",
            },
            {
              mediaId: "1395460677117",
              timestamp: "2023-05-27T14:11:29",
            },
          ],
        },
        {
          number: 13,
          postPosition: 3,
          distance: 2160,
          horse: {
            id: 757674,
            name: "Vilja T.Y.C.",
            age: 6,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 13,
                tenths: 3,
              },
            },
            trainer: {
              id: 151098,
              firstName: "Stefan",
              lastName: "Arvidsson",
              shortName: "Arv St",
              location: "Bollnäs",
              birth: 1974,
              homeTrack: {
                id: 12,
                name: "Bollnäs",
              },
              license: "A-tränare: träna, köra",
              silks: "Röd, svart kil, vita stj ärm; svart",
              statistics: {
                years: {
                  "2022": {
                    starts: 320,
                    earnings: 364730000,
                    placement: {
                      "1": 25,
                      "2": 34,
                      "3": 34,
                    },
                    winPercentage: 781,
                  },
                  "2023": {
                    starts: 113,
                    earnings: 117870000,
                    placement: {
                      "1": 7,
                      "2": 12,
                      "3": 15,
                    },
                    winPercentage: 619,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: true,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 614200,
            color: "brun",
            homeTrack: {
              id: 12,
              name: "Bollnäs",
            },
            owner: {
              id: 715125,
              name: "H J F Entreprenad AB",
              location: "Alfta",
            },
            breeder: {
              id: 502146,
              name: "Teccet AB",
              location: "Klippan",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 15,
                  earnings: 26520000,
                  placement: {
                    "1": 1,
                    "2": 1,
                    "3": 4,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 6,
                      },
                      place: 6,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 3,
                      },
                      place: 5,
                    },
                  ],
                },
                "2023": {
                  starts: 6,
                  earnings: 16600000,
                  placement: {
                    "1": 1,
                    "2": 1,
                    "3": 1,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 12,
                        tenths: 9,
                      },
                      place: 2,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 8,
                      },
                      place: 7,
                    },
                  ],
                },
              },
              life: {
                starts: 33,
                earnings: 61420000,
                placement: {
                  "1": 5,
                  "2": 4,
                  "3": 6,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 2,
                    },
                    place: 4,
                    year: "2023",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 9,
                    },
                    place: 2,
                    year: "2023",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 3,
                    },
                    place: 5,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 16,
                      tenths: 2,
                    },
                    place: 3,
                    year: "2022",
                  },
                ],
                winPercentage: 1515,
                placePercentage: 4545,
                earningsPerStart: 1861212,
                startPoints: 1840,
              },
              lastFiveStarts: {
                averageOdds: 1236,
              },
            },
            pedigree: {
              father: {
                id: 705071,
                name: "Brad de Veluwe",
                nationality: "FI",
              },
              mother: {
                id: 732135,
                name: "Take Your Chance",
              },
              grandfather: {
                id: 562580,
                name: "Love You",
                nationality: "FR",
              },
            },
          },
          driver: {
            id: 67192,
            firstName: "Örjan",
            lastName: "Kihlström",
            shortName: "Kih Ör",
            location: "Bromma",
            birth: 1962,
            homeTrack: {
              id: 5,
              name: "Solvalla",
            },
            license: "A-tränare: träna, köra",
            silks: "Turkos, vitt axelparti, 2-del ärm; vit",
            statistics: {
              years: {
                "2022": {
                  starts: 1124,
                  earnings: 5732761800,
                  placement: {
                    "1": 235,
                    "2": 148,
                    "3": 135,
                  },
                  winPercentage: 2090,
                },
                "2023": {
                  starts: 312,
                  earnings: 1001431700,
                  placement: {
                    "1": 61,
                    "2": 33,
                    "3": 30,
                  },
                  winPercentage: 1955,
                },
              },
            },
          },
          result: {
            place: 5,
            finishOrder: 5,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 2,
            },
            prizeMoney: 22000,
            finalOdds: 25.52,
            startNumber: 13,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 2552,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 634,
              maxOdds: 634,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 347,
              potentialPayout: {
                value: 43700,
              },
            },
          },
          videos: [
            {
              mediaId: "1395459141286",
              timestamp: "2023-05-27T14:16:59",
            },
            {
              mediaId: "1395460165261",
              timestamp: "2023-05-27T14:06:26",
            },
            {
              mediaId: "1395462213267",
              timestamp: "2023-05-27T14:37:07",
            },
            {
              mediaId: "1395463749162",
              timestamp: "2023-05-27T14:27:31",
            },
          ],
        },
        {
          number: 14,
          postPosition: 4,
          distance: 2160,
          horse: {
            id: 766592,
            name: "Infinity Sisu",
            age: 5,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 15,
                tenths: 0,
              },
            },
            trainer: {
              id: 659515,
              firstName: "Oskar J",
              lastName: "Andersson",
              shortName: "And OJ",
              location: "Sala",
              birth: 1992,
              homeTrack: {
                id: 14,
                name: "Eskilstuna",
              },
              license: "A-tränare: träna, köra",
              silks: "Mblå, silver och svarta detaljer; mblå",
              statistics: {
                years: {
                  "2022": {
                    starts: 271,
                    earnings: 407450300,
                    placement: {
                      "1": 53,
                      "2": 41,
                      "3": 32,
                    },
                    winPercentage: 1955,
                  },
                  "2023": {
                    starts: 103,
                    earnings: 167525100,
                    placement: {
                      "1": 14,
                      "2": 11,
                      "3": 16,
                    },
                    winPercentage: 1359,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
                changed: true,
              },
              back: {
                hasShoe: false,
                changed: true,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: true,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 547747,
            color: "mörkbrun",
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            owner: {
              id: 134918,
              name: "Easy KB",
              location: "Uppsala",
            },
            breeder: {
              id: 644300,
              name: "Sisyfos Breeders AB",
              location: "Sigtuna",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 12,
                  earnings: 35250000,
                  placement: {
                    "1": 4,
                    "2": 2,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 6,
                      },
                      place: 0,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 15,
                        tenths: 0,
                      },
                      place: 1,
                    },
                  ],
                },
                "2023": {
                  starts: 2,
                  earnings: 13524700,
                  placement: {
                    "1": 1,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aM",
                      startMethod: "auto",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 5,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 16,
                earnings: 54774700,
                placement: {
                  "1": 6,
                  "2": 4,
                  "3": 0,
                },
                records: [
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 6,
                    },
                    place: 0,
                    year: "2022",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 3,
                    },
                    place: 7,
                    year: "2022",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 15,
                      tenths: 0,
                    },
                    place: 1,
                    year: "2022",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 19,
                      tenths: 9,
                    },
                    place: 2,
                    year: "2021",
                  },
                ],
                winPercentage: 3750,
                placePercentage: 6250,
                earningsPerStart: 3423418,
                startPoints: 3032,
              },
              lastFiveStarts: {
                averageOdds: 1644,
              },
            },
            pedigree: {
              father: {
                id: 601184,
                name: "Classic Photo",
                nationality: "US",
              },
              mother: {
                id: 726863,
                name: "Chocolate Gem",
                nationality: "US",
              },
              grandfather: {
                id: 581297,
                name: "Chocolatier",
                nationality: "US",
              },
            },
          },
          driver: {
            id: 659515,
            firstName: "Oskar J",
            lastName: "Andersson",
            shortName: "And OJ",
            location: "Sala",
            birth: 1992,
            homeTrack: {
              id: 14,
              name: "Eskilstuna",
            },
            license: "A-tränare: träna, köra",
            silks: "Mblå, silver och svarta detaljer; mblå",
            statistics: {
              years: {
                "2022": {
                  starts: 395,
                  earnings: 507631400,
                  placement: {
                    "1": 58,
                    "2": 54,
                    "3": 36,
                  },
                  winPercentage: 1468,
                },
                "2023": {
                  starts: 130,
                  earnings: 202595100,
                  placement: {
                    "1": 18,
                    "2": 13,
                    "3": 18,
                  },
                  winPercentage: 1384,
                },
              },
            },
          },
          result: {
            place: 3,
            finishOrder: 3,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 1,
            },
            prizeMoney: 62000,
            finalOdds: 8.21,
            startNumber: 14,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 821,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 280,
              maxOdds: 280,
              odds: 280,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 1061,
              potentialPayout: {
                value: 16000,
              },
            },
          },
          videos: [
            {
              mediaId: "1395456581251",
              timestamp: "2023-05-27T14:04:50",
            },
            {
              mediaId: "1395459653229",
              timestamp: "2023-05-27T14:15:00",
            },
          ],
        },
        {
          number: 15,
          postPosition: 1,
          distance: 2180,
          horse: {
            id: 738385,
            name: "Devs Daffodil",
            age: 9,
            sex: "mare",
            record: {
              code: "M",
              startMethod: "volte",
              distance: "medium",
              time: {
                minutes: 1,
                seconds: 12,
                tenths: 5,
              },
            },
            trainer: {
              id: 181913,
              firstName: "Conrad",
              lastName: "Lugauer",
              shortName: "Lug Co",
              location: "Blentarp",
              birth: 1974,
              homeTrack: {
                id: 7,
                name: "Jägersro",
              },
              license: "A-tränare: träna, köra",
              silks: "Mörkblå, vit/gul hängslen; mörkblå",
              statistics: {
                years: {
                  "2022": {
                    starts: 530,
                    earnings: 1025287100,
                    placement: {
                      "1": 95,
                      "2": 64,
                      "3": 53,
                    },
                    winPercentage: 1792,
                  },
                  "2023": {
                    starts: 206,
                    earnings: 531648300,
                    placement: {
                      "1": 48,
                      "2": 32,
                      "3": 27,
                    },
                    winPercentage: 2330,
                  },
                },
              },
            },
            shoes: {
              reported: true,
              front: {
                hasShoe: false,
              },
              back: {
                hasShoe: false,
              },
            },
            sulky: {
              reported: true,
              type: {
                code: "VA",
                text: "Vanlig",
                engText: "Standard",
                changed: false,
              },
              colour: {
                code: "GU",
                text: "Gul",
                engText: "Yellow",
                changed: false,
              },
            },
            money: 2130542,
            color: "brun",
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            owner: {
              id: 734128,
              name: "Stall Kryddan HB",
              location: "Berga",
            },
            breeder: {
              id: 563848,
              name: "Bergenstam-Hansson M",
              location: "Hansson J & F",
            },
            statistics: {
              years: {
                "2022": {
                  starts: 16,
                  earnings: 60629200,
                  placement: {
                    "1": 2,
                    "2": 1,
                    "3": 2,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 10,
                        tenths: 9,
                      },
                      place: 4,
                    },
                    {
                      code: "M",
                      startMethod: "volte",
                      distance: "medium",
                      time: {
                        minutes: 1,
                        seconds: 13,
                        tenths: 3,
                      },
                      place: 8,
                    },
                  ],
                },
                "2023": {
                  starts: 2,
                  earnings: 6598800,
                  placement: {
                    "1": 0,
                    "2": 1,
                    "3": 0,
                  },
                  records: [
                    {
                      code: "aK",
                      startMethod: "auto",
                      distance: "short",
                      time: {
                        minutes: 1,
                        seconds: 11,
                        tenths: 5,
                      },
                      place: 2,
                    },
                  ],
                },
              },
              life: {
                starts: 82,
                earnings: 213054200,
                placement: {
                  "1": 14,
                  "2": 12,
                  "3": 9,
                },
                records: [
                  {
                    code: "aK",
                    startMethod: "auto",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 10,
                      tenths: 9,
                    },
                    place: 4,
                    year: "2022",
                  },
                  {
                    code: "aM",
                    startMethod: "auto",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 11,
                      tenths: 9,
                    },
                    place: 3,
                    year: "2022",
                  },
                  {
                    code: "aL",
                    startMethod: "auto",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 8,
                    },
                    place: 1,
                    year: "2021",
                  },
                  {
                    code: "K",
                    startMethod: "volte",
                    distance: "short",
                    time: {
                      minutes: 1,
                      seconds: 13,
                      tenths: 2,
                    },
                    place: 7,
                    year: "2020",
                  },
                  {
                    code: "M",
                    startMethod: "volte",
                    distance: "medium",
                    time: {
                      minutes: 1,
                      seconds: 12,
                      tenths: 5,
                    },
                    place: 6,
                    year: "2020",
                  },
                  {
                    code: "L",
                    startMethod: "volte",
                    distance: "long",
                    time: {
                      minutes: 1,
                      seconds: 14,
                      tenths: 9,
                    },
                    place: 0,
                    year: "2022",
                  },
                ],
                winPercentage: 1707,
                placePercentage: 4268,
                earningsPerStart: 2598221,
                startPoints: 2609,
              },
              lastFiveStarts: {
                averageOdds: 2295,
              },
            },
            pedigree: {
              father: {
                id: 195521,
                name: "Enjoy Lavec",
              },
              mother: {
                id: 681460,
                name: "Spring Skandal",
                nationality: "US",
              },
              grandfather: {
                id: 494729,
                name: "Conway Hall",
                nationality: "CA",
              },
            },
          },
          driver: {
            id: 181913,
            firstName: "Conrad",
            lastName: "Lugauer",
            shortName: "Lug Co",
            location: "Blentarp",
            birth: 1974,
            homeTrack: {
              id: 7,
              name: "Jägersro",
            },
            license: "A-tränare: träna, köra",
            silks: "Mörkblå, vit/gul hängslen; mörkblå",
            statistics: {
              years: {
                "2022": {
                  starts: 341,
                  earnings: 694937500,
                  placement: {
                    "1": 60,
                    "2": 43,
                    "3": 33,
                  },
                  winPercentage: 1759,
                },
                "2023": {
                  starts: 154,
                  earnings: 440325000,
                  placement: {
                    "1": 44,
                    "2": 18,
                    "3": 19,
                  },
                  winPercentage: 2857,
                },
              },
            },
          },
          result: {
            place: 0,
            finishOrder: 12,
            kmTime: {
              minutes: 1,
              seconds: 13,
              tenths: 0,
            },
            galloped: true,
            prizeMoney: 2500,
            finalOdds: 18.34,
            startNumber: 15,
          },
          pools: {
            vinnare: {
              "@type": ".VinnareStartPool",
              odds: 1834,
            },
            plats: {
              "@type": ".PlatsStartPool",
              minOdds: 444,
              maxOdds: 444,
            },
            V75: {
              "@type": ".MarkingBetStartPool",
              betDistribution: 403,
              potentialPayout: {
                value: 35500,
              },
            },
          },
          videos: [
            {
              mediaId: "1395458629080",
              timestamp: "2023-05-27T14:02:18",
            },
          ],
        },
      ],
      mergedPools: [
        {
          name: "A",
          betTypes: ["vinnare", "plats", "komb", "tvilling", "trio"],
        },
      ],
    },
  ],
  currentVersion: 1685350243227,
};
