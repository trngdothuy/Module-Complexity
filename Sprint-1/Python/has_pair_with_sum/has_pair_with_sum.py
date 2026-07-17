from typing import List, TypeVar

Number = TypeVar("Number", int, float)


def has_pair_with_sum(numbers: List[Number], target_sum: Number) -> bool:
    """
    Find if there is a pair of numbers that sum to a target value.

    Time Complexity:
    Space Complexity:
    Optimal time complexity:
    """
    seen = set()

    for i in numbers:
        complement = target_sum - i
        if complement in seen:
            return True
        seen.add(i)
    return False
