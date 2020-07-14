exports.docxReader = (req, res, next) => {
  var textract = require("textract");

  const docxUrl = req.body.docxUrl;
  var config = {
    preserveLineBreaks: true,
    // preserveOnlyMultipleLineBreaks: true
  };
  // https://firebasestorage.googleapis.com/v0/b/programing-quiz-2019.appspot.com/o/input.docx?alt=media&token=21bea245-f9d4-47b9-908a-92b2a8054cd3
  textract.fromUrl(docxUrl, config, function (error, text) {
    if (error) {
      res.status(500).json({
        message: "Error to read file docx.",
      });
    } else {
      const text_list = text.split("\n\n").filter((m) => m !== "");
      const quiz_list = [];
      text_list.forEach((q) => {
        const quiz_split = q.split("\n");
        const len = quiz_split.length;

        // list of answers
        const answer_list = quiz_split.slice(len - 4, len);
        const correct = String(
          answer_list.find((ans) => ans.includes("*"))
        ).replace("*", "");
        const answer = answer_list.map((a) => a.replace("*", ""));

        const quiz = {
          point: quiz_split[0],
          question: quiz_split.slice(1, len - 4),
          answer: answer,
          correct: correct,
        };
        quiz_list.push(quiz);
      });
      res.status(200).json(
        quiz_list
      );
    }
  });
};
