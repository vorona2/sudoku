function possible (x,y,n)
{
	for (let i = 0; i < 9; i++)
	{
		if (grid[i][y] == n)
		{
			return false;
		}
	}
	for (let j = 0; j < 9; j++)
	{
		if (grid[x][j] == n)
		{
			return false;
		}
	}

	// cheching if we have n in a small squere
	var r = x % 3;
	var x0 = x - r;
	console.log(x0);

	r = y % 3;
	var y0 = y - r;
	// console.log(y0);

	for (let i=0; i<3; i++)
	{
		for (let j=0; j<3; j++)
		{
			if (grid[x0+i][y0+j] == n)
			{
				return false;
			}
		}
	}
	// end of cheching if we have n in a small squere
	return true;
} // end of function Posssible

function printgrid (matrix)
{
	for (let i = 0; i < 9; i++)
	{
		var j = 0;
		var str = "";
		for (j = 0; j < 9; j++)
		{
			str = str + matrix[i][j] + ", ";
		}
		str = str.substr(0, str.length - 2);
		console.log(str);
	}
}
function findzero()
{
	for (let i = 0; i < 9; i++)
	{
		for (let j = 0;  j < 9; j++)
		{
			if (grid[i][j] == 0)
			{
				i0=i;
				j0=j;
				return true;
			}
		}
	}
	return false;
}

function solve()
{
	if (findzero())
	{
		for (let n = 1; n < 10; n++)
		{
			if (possible(i0,j0,n))
			{
				grid[i0][j0] = n;
				solve();
				grid[i0][j0] = 0;
			}
		}
	}
	return false;
} // end of solve function

var i0 = 0;
var j0 = 0;
var grid = [
	[1, 0, 5, 0, 9, 2, 0, 0, 0],
	[0, 8, 0, 5, 0, 0, 0, 1, 0],
	[4, 0, 6, 0, 1, 0, 0, 0, 0],
	[0, 0, 7, 0, 0, 9, 8, 0, 0],
	[0, 6, 0, 2, 0, 7, 0, 3, 0],
	[0, 0, 8, 3, 0, 0, 5, 0, 0],
	[0, 0, 0, 0, 3, 0, 1, 0, 8],
	[0, 5, 0, 0, 0, 8, 0, 9, 0],
	[0, 0, 0, 9, 4, 0, 3, 0, 5]
];

printgrid(grid);
solve();
printgrid(grid);
