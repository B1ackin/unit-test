import {mult, splitIntoWords, sum} from "./01";

test('sum shout be correct', () => {
    let a = 1;
    let b = 2;
    let c = 3;

    let result = sum(a,b);
    let result1 = sum(b,c);

    expect(result).toBe(3);
    expect(result1).toBe(5);
})

test('multiply shout be correct', () => {
    let a = 1;
    let b = 2;
    let c = 3;

    let result = mult(a,b);
    let result1 = mult(b,c);

    expect(result).toBe(2);
    expect(result1).toBe(6);
})

test ("spliting into words shoud be correct", () => {
    //Тест состоит из 3 этапов
    //1.Подготовительные данные
    const sent1 = "Hello my friend"
    const sent2 = "JS - the best programming language"

    //2. Действие какое то
    let result = splitIntoWords(sent1);
    let result1 = splitIntoWords(sent2);


    //3. Ожидаемый результат
    expect(result.length).toBe(3)
    expect(result[0]).toBe("hello")
    expect(result[1]).toBe("my")
    expect(result[2]).toBe("friend")

    expect(result.length).toBe(5)
    expect(result[0]).toBe("js")
    expect(result[1]).toBe("the")
    expect(result[2]).toBe("best")
    expect(result[3]).toBe("programming")
    expect(result[4]).toBe("language")
})