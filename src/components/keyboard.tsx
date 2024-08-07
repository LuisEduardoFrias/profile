
import "st/keyboard.css"

const keyframes = {
    '@keyframes typeAndDelete': {
        '0%, 10%': {
            width: 0,
        },
        '45%, 55%': {
            width: "8em",
        },
        '90%, 100%': {
            width: 0,
        }
    }
};

type KeyProps = {
    text: string | undefined,
    subText: string | undefined,
    className: string | undefined
}

export default function KeyBoard() {
    const text = "programando"

    const animationStyles = {
        animation: "typeAndDelete 8s infinite, blinkCursor .5s step-end infinite alternate",
        animationTimingFunction: `steps(${text.length + 2})`,
        animationName: 'typeAndDelete'
    };

    return (
        <div className="container-keyboard">
            {/*
            <div className="keyboard-pronter">
                <div style={{ ...animationStyles }} className="text">{text}</div>
            </div>
            */}
            <div className="keyboard">

                <div>
                    {
                        row1.map((e: KeyProps, index: number) => <Key key={index} {...e} />)
                    }
                </div>

                <div>
                    {
                        row2.map((e: KeyProps, index: number) => <Key key={index} {...e} />)
                    }
                </div>

                <div>
                    {
                        row3.map((e: KeyProps, index: number) => <Key key={index} {...e} />)
                    }
                </div>

                <div>
                    {
                        row4.map((e: KeyProps, index: number) => <Key key={index} {...e} />)
                    }
                </div>

                <div>
                    {
                        row5.map((e: KeyProps, index: number) => <Key key={index} {...e} />)
                    }
                </div>

                <div className="last">
                    {
                        row6.map((e: KeyProps, index: number) => <Key key={index} {...e} />)
                    }
                </div>

                <div className="buttons">
                    <div>
                        <button><div></div></button>
                        <button><div></div></button>
                    </div>
                </div>

                <div className="screen">
                    <div>
                        <div>
                            <div>
                                <div>
                                    <span>9:00</span>
                                    <span>Thru, Apr 4</span>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    )
}

const row1: KeyProps[] = [
    {
        className: "key orange esc",
        text: "esc",
        subText: undefined,
    },
    {
        className: "key",
        text: "F1",
        subText: "jdjd",
    },
    {
        className: "key",
        text: "F2",
        subText: "jdjd",
    },
    {
        className: "key",
        text: "F3",
        subText: "jdjd",
    },
    {
        className: "key",
        text: "F4",
        subText: "jdjd",
    },
    {
        className: "key",
        text: "F5",
        subText: "jdjd",
    },
    {
        className: "key",
        text: "F6",
        subText: "jdjd",
    },
    {
        className: "key",
        text: "F7",
        subText: "jdjd",
    },
    {
        className: "key",
        text: "F8",
        subText: "jdjd",
    },
    {
        className: "key",
        text: "F9",
        subText: "jdjd",
    },
    {
        className: "key",
        text: "F10",
        subText: "jdjd",
    },
    {
        className: "key",
        text: "F11",
        subText: "jdjd",
    },
    {
        className: "key",
        text: "F12",
        subText: undefined,
    },
    {
        className: "key del",
        text: "del",
        subText: undefined,
    }
]

const row2: KeyProps[] = [
    {
        className: "key",
        text: "esc",
        subText: "±",
    },
    {
        className: "key",
        text: "1",
        subText: "!",
    },
    {
        className: "key",
        text: "2",
        subText: "@",
    },
    {
        className: "key",
        text: "3",
        subText: "#",
    },
    {
        className: "key",
        text: "4",
        subText: "$",
    },
    {
        className: "key",
        text: "5",
        subText: "%",
    },
    {
        className: "key",
        text: "6",
        subText: "^",
    },
    {
        className: "key",
        text: "7",
        subText: "&",
    },
    {
        className: "key",
        text: "8",
        subText: "*",
    },
    {
        className: "key",
        text: "9",
        subText: "(",
    },
    {
        className: "key",
        text: "0",
        subText: ")",
    },
    {
        className: "key",
        text: "-",
        subText: "_",
    },
    {
        className: "key",
        text: "=",
        subText: "+",
    },
    {
        className: "key backspace",
        text: "backspace",
        subText: undefined,
    }
]

const row3: KeyProps[] = [
    {
        className: "key tab",
        text: "tab",
        subText: undefined
    },
    {
        className: "key",
        text: "Q",
        subText: undefined
    },
    {
        className: "key",
        text: "W",
        subText: undefined,
    },
    {
        className: "key",
        text: "E",
        subText: undefined
    },
    {
        className: "key text-r",
        text: "R",
        subText: undefined
    },
    {
        className: "key",
        text: "T",
        subText: undefined
    },
    {
        className: "key",
        text: "Y",
        subText: undefined
    },
    {
        className: "key",
        text: "U",
        subText: undefined
    },
    {
        className: "key",
        text: "I",
        subText: undefined
    },
    {
        className: "key text-o",
        text: "O",
        subText: undefined
    },
    {
        className: "key text-p",
        text: "P",
        subText: undefined
    },
    {
        className: "key",
        text: "[",
        subText: "{",
    },
    {
        className: "key",
        text: "]",
        subText: "}",
    },
    {
        className: "key enter1",
        text: "<------",
        subText: undefined
    }
]

const row4: KeyProps[] = [
    {
        className: "key caps",
        text: "caps",
        subText: undefined
    },
    {
        className: "key text-a",
        text: "A",
        subText: undefined
    },
    {
        className: "key",
        text: "S",
        subText: undefined,
    },
    {
        className: "key text-d",
        text: "D",
        subText: undefined
    },
    {
        className: "key",
        text: "F",
        subText: undefined
    },
    {
        className: "key text-g",
        text: "G",
        subText: undefined
    },
    {
        className: "key",
        text: "H",
        subText: undefined
    },
    {
        className: "key",
        text: "J",
        subText: undefined
    },
    {
        className: "key",
        text: "K",
        subText: undefined
    },
    {
        className: "key",
        text: "L",
        subText: undefined
    },
    {
        className: "key",
        text: ";",
        subText: ":"
    },
    {
        className: "key",
        text: "'",
        subText: "\"",
    },
    {
        className: "key",
        text: "\\",
        subText: "|",
    },
    {
        className: "key enter2",
        text: undefined,
        subText: undefined
    }
]

const row5: KeyProps[] = [
    {
        className: "key shitf",
        text: "shitf",
        subText: undefined
    },
    {
        className: "key",
        text: ".",
        subText: "~"
    },
    {
        className: "key",
        text: "Z",
        subText: undefined
    },
    {
        className: "key",
        text: "X",
        subText: undefined,
    },
    {
        className: "key",
        text: "C",
        subText: undefined
    },
    {
        className: "key",
        text: "V",
        subText: undefined
    },
    {
        className: "key",
        text: "B",
        subText: undefined
    },
    {
        className: "key text-n",
        text: "N",
        subText: undefined
    },
    {
        className: "key text-m",
        text: "M",
        subText: undefined
    },
    {
        className: "key",
        text: "`",
        subText: "<"
    },
    {
        className: "key",
        text: ".",
        subText: ">"
    },
    {
        className: "key",
        text: "/",
        subText: "?"
    },
    {
        className: "key shitf2",
        text: "shitf",
        subText: undefined
    },
    {
        className: "key orange up",
        text: undefined,
        subText: undefined,
    },
]

const row6: KeyProps[] = [
    {
        className: "key ctrl",
        text: "ctrl",
        subText: "^"
    },
    {
        className: "key",
        text: "fn",
        subText: undefined
    },
    {
        className: "key",
        text: "alt",
        subText: undefined,
    },
    {
        className: "key home",
        text: "home",
        subText: undefined
    },
    {
        className: "key space",
        text: undefined,
        subText: undefined
    },
    {
        className: "key",
        text: "alt",
        subText: undefined
    },
    {
        className: "key fn",
        text: "fn",
        subText: undefined
    },
    {
        className: "key orange lef",
        text: undefined,
        subText: undefined
    },
    {
        className: "key orange bottom",
        text: undefined,
        subText: undefined
    },
    {
        className: "key orange right",
        text: undefined,
        subText: undefined
    }
]

function Key({ text, subText, className }: KeyProps) {
    return (
        <div className={className}>
            <div>
                <div>
                    <div>
                        <span>{text}</span>
                        <span>{subText}</span>
                    </div>
                </div>
            </div>
        </div>
    )
}