const modifiers = [

    {
        name: "美形",
        score: 3,
        description: "道行く人は思わず二度見してしまうでしょう"
    },

    {
        name: "ものすごく美形",
        score: 6,
        description: "もはやあなたの顔は世界で通用するレベルに美しいです"
    },

    {
        name: "器用",
        score: 1,
        description: "繊細な作業もそつなくこなします"
    },

    {
        name: "高IQ",
        score: 8,
        description: "WAIS-IVの4項目の値が150になります"
    },

    {
        name: "コミュ強",
        score: 2,
        description: "初対面の相手とも自然に会話でき、好意を持たれやすくなります"
    },

    {
        name: "頑健",
        score: 2,
        description: "切り傷から骨折まで、あらゆるけがの治りが早くなり、多少の無理にも耐えます"
    },

    {
        name: "超免疫",
        score: 3,
        description: "病気や感染症になりにくく、病気になっても回復が早くなります"
    },

    {
        name: "不眠耐性",
        score: 3,
        description: "睡眠時間が短くなり、不眠によるパフォーマンス低下が少なくなります"
    },

    {
        name: "運動神経抜群",
        score: 2,
        description: "身体の動かし方が上手く、スポーツや運動をすぐに習得できます"
    },

    {
        name: "記憶力抜群",
        score: 3,
        description: "一度見聞きした情報を、ほぼ正確に長期間保持できます"
    },

    {
        name: "要領良し",
        score: 2,
        description: "無駄な努力をせず、物事のコツの掴み方を直感的に理解できます"
    },

    {
        name: "天才",
        score: 12,
        description: "どんな才能を持つかはランダムですが、世界を驚かせるような天才になります"
    },

    {
        name: "幸運",
        score: 2,
        description: "何かしら得をする機会がはるかに増えます"
    },

    {
        name: "豪運",
        score: 5,
        description: "幸運の女神が、人生を変えるほどの幸運をあなたにもたらします"
    },

    {
        name: "代謝良好",
        score: 1,
        description: "食事から得たエネルギーを効率よく消費できます"
    },

    {
        name: "清潔感〇",
        score: 2,
        description: "体臭がない、脂汗をかかない、ムダ毛が薄い、肌がきれい等、清潔感を保ちやすい体質です"
    },

    {
        name: "ふさふさ",
        score: 1,
        description: "歳をとっても決して禿げることはないでしょう"
    },

    {
        name: "高身長",
        score: 1,
        description: "180センチ以上は約束されます"
    },

    {
        name: "性豪",
        score: 0,
        description: "あなたの性欲はとどまることを知りません"
    },

    {
        name: "醜い",
        score: -3,
        description: "ニキビ跡、分厚い唇、ブタ鼻...おまけにパーツの配置も不格好です"
    },

    {
        name: "ものすごく醜い",
        score: -6,
        description: "あまりの醜さに吐き気を催す人さえいます"
    },

    {
        name: "不器用",
        score: -6,
        description: "細かい作業がストレスに感じるでしょう"
    }

];

const talents = [

    {
        name: "数学的才能",
        description: "数学や論理的な問題に対する理解力と直感が突出しています。"
    },

    {
        name: "音楽的才能",
        description: "音程やリズムを正確に捉え、楽器や歌を驚異的な速度で習得できます。"
    },

    {
        name: "絵画の才能",
        description: "色彩や構図を直感的に理解し、非常に優れた絵を描くことができます。"
    },

    {
        name: "文章の才能",
        description: "言葉の扱いに優れ、人を惹きつける文章を自然に書くことができます。"
    },

    {
        name: "プログラミングの才能",
        description: "プログラムの構造を直感的に理解し、複雑なシステムを素早く構築できます。"
    },

    {
        name: "スポーツの才能",
        description: "身体能力を効率よく活かす方法を理解し、競技を極める速度が異常に速くなります。"
    },

    {
        name: "空間認識の才能",
        description: "物体の位置や形状を頭の中で正確に把握し、立体的な問題を容易に解決できます。"
    },

    {
        name: "語学の才能",
        description: "外国語の構造や発音を直感的に理解し、新しい言語を非常に速く習得できます。"
    },

    {
        name: "人心掌握の才能",
        description: "他人の感情や心理を敏感に察知し、人間関係を巧みに操ることができます。"
    },

    {
        name: "記憶の才能",
        description: "大量の情報を正確に記憶し、必要なときに瞬時に取り出すことができます。"
    },

    {
        name: "発明の才能",
        description: "既存の知識を組み合わせ、誰も思いつかなかった新しい仕組みを生み出します。"
    },

    {
        name: "医学の才能",
        description: "人体や病気について極めて高い理解力を持ち、医学的な問題を素早く解決できます。"
    }

];


let selected = [];


const modifiersArea =
    document.getElementById("modifiers");

const scoreArea =
    document.getElementById("score");

const confirmButton =
    document.getElementById("confirmButton");


/* =========================
   モディファイア表示
========================= */

function displayModifiers() {

    modifiersArea.innerHTML = "";

    modifiers.forEach(function(modifier, index) {

        const card =
            document.createElement("div");

        card.className = "modifier";


        if (selected.includes(index)) {

            card.classList.add("selected");

        }


        let scoreClass;

        if (modifier.score > 0) {

            scoreClass = "positive";

        } else if (modifier.score < 0) {

            scoreClass = "negative";

        } else {

            scoreClass = "zero";

        }


        const sign =
            modifier.score > 0
            ? "+"
            : "";


        card.innerHTML = `

            <div class="modifier-header">

                <div class="modifier-name">
                    ${modifier.name}
                </div>

                <div class="modifier-score ${scoreClass}">
                    ${sign}${modifier.score}
                </div>

            </div>

            <div class="description">
                ${modifier.description}
            </div>

        `;


        card.onclick = function() {

            if (selected.includes(index)) {

                selected =
                    selected.filter(function(i) {
                        return i !== index;
                    });

            } else {

                selected.push(index);

            }


            displayModifiers();

            calculateScore();

        };


        modifiersArea.appendChild(card);

    });

}


/* =========================
   スコア計算
========================= */

function calculateScore() {

    let total = 0;


    selected.forEach(function(index) {

        total += modifiers[index].score;

    });


    const sign =
        total > 0
        ? "+"
        : "";


    scoreArea.textContent =
        "合計：" + sign + total;


    /*
     * 合計0なら確定可能
     */

    if (total === 0) {

        confirmButton.disabled = false;

        confirmButton.textContent =
            "この人生を確定する";

    } else {

        confirmButton.disabled = true;

        confirmButton.textContent =
            "合計を0にすると確定できます";

    }

}


/* =========================
   確定ボタン
========================= */

confirmButton.onclick = function() {

    /*
     * 選択したモディファイア
     */

    const selectedModifiers =
        selected.map(function(index) {

            return modifiers[index];

        });


    /*
     * 天才を選択しているか確認
     */

    const hasGenius =
        selectedModifiers.some(function(modifier) {

            return modifier.name === "天才";

        });


    /*
     * 天才の才能を抽選
     */

    let talent = null;


    if (hasGenius) {

        const randomIndex =
            Math.floor(
                Math.random() * talents.length
            );

        talent =
            talents[randomIndex];

    }


    /*
     * 名前入力
     */

    const name =
        prompt("この人物の名前を入力してください");


    if (name === null) {

        return;

    }


    const trimmedName =
        name.trim();


    if (trimmedName === "") {

        alert("名前を入力してください。");

        return;

    }


    /*
     * 保存されている人物を取得
     */

    const people =
        JSON.parse(
            localStorage.getItem("lifeModifiers")
        ) || [];


    /*
     * 新しい人物を作成
     */

    const person = {

        id: Date.now(),

        name: trimmedName,

        modifiers: selectedModifiers,

        talent: talent,

        total: 0

    };


    /*
     * 保存
     */

    people.push(person);


    localStorage.setItem(
        "lifeModifiers",
        JSON.stringify(people)
    );


    /*
     * 人物一覧へ
     */

    window.location.href =
        "people.html";

};
/* ==========================================
   完全ランダム生成
========================================== */

randomButton.onclick = function() {

    /*
     * 一度すべての選択を解除
     */

    selected = [];


    /*
     * 選ぶ個数をランダムに決定
     *
     * 1個 ～ 全項目
     */

    const randomCount =
        Math.floor(
            Math.random() * modifiers.length
        ) + 1;


    /*
     * 全項目の番号を作る
     */

    let indexes = [];

    for (
        let i = 0;
        i < modifiers.length;
        i++
    ) {

        indexes.push(i);

    }


    /*
     * 項目の順番を完全ランダムにする
     */

    indexes.sort(
        () => Math.random() - 0.5
    );


    /*
     * ランダムに決まった個数だけ選択
     */

    selected =
        indexes.slice(0, randomCount);


    /*
     * 画面更新
     */

    displayModifiers();

    calculateScore();

};

/* =========================
   初期表示
========================= */

displayModifiers();

calculateScore();