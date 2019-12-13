import argparse
import sys
import os
from os import listdir
from os.path import isfile, join


def parse_arguments():
    algorithms = [f for f in listdir("algorithms") if isfile(join("algorithms", f))]
    algorithms = [f[:-len(".py")] for f in algorithms if f.endswith(".py")]

    data_sets = [f for f in listdir("data_sets") if isfile(join("data_sets", f))]
    data_sets = [f[:-len(".txt")] for f in data_sets if f.endswith(".txt")]

    parser = argparse.ArgumentParser()
    parser.add_argument(
        "-a", "--algorithm",
        help="algorithm to build model for",
        metavar='ALGORITHM',
        required=True,
        choices=algorithms
    )
    parser.add_argument(
        "-d", "--data_set",
        help="dataset to build model for",
        metavar='DATA_SET',
        required=True,
        choices=data_sets
    )

    args = parser.parse_args()
    print("BUILDING MODEL FOR PARAMETERS:")
    print("--algorithm " + args.algorithm)
    print("--data_set " + args.data_set)
    return args


def main():
    args = parse_arguments()
    os.system(f'python3 algorithms/{args.algorithm}.py {args.data_set}')
    return 0


if __name__ == '__main__':
    sys.exit(main())
